import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import registry from "@/registry";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Component {
  name: string;
  title: string;
  description?: string;
}

export function getComponent(name: string): Component {
  const component = registry.items.find(
    (item: { name: string }) => item.name === name,
  );

  if (component == null) {
    throw new Error(`Component "${name}" not found`);
  }

  return component;
}

export async function getPrompt(): Promise<string> {
  try {
    const response = await fetch("/v0.md");
    if (!response.ok) throw new Error("Failed to fetch prompt");
    return await response.text();
  } catch (error) {
    console.warn("Failed to load custom prompt, using default");
    return "These are existing design system styles and files. Please utilize them alongside base components to build.";
  }
}
