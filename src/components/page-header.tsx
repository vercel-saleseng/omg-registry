"use client";

import type React from "react";

interface PageHeaderProps {
  title: string;
  actions?: React.ReactNode;
}

export function PageHeader({ title, actions }: PageHeaderProps) {
  return (
    <div className="w-full px-3.5 py-3">
      <div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
        <h1 className="font-semibold text-2xl tracking-tight md:text-3xl">
          {title}
        </h1>
        {actions && (
          <div className="flex w-full flex-col space-y-2 md:w-auto md:flex-row md:space-x-2 md:space-y-0">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
}
