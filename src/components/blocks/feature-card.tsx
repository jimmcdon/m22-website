"use client";

import React from "react";
import { Card3D } from "@/components/ui/3d-card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
  return (
    <Card3D className={className}>
      <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 h-full">
        {icon && <div className="mb-4">{icon}</div>}
        <h3 className="font-display text-xl font-medium text-slate-900 mb-4">
          {title}
        </h3>
        <p className="text-slate-600">
          {description}
        </p>
      </div>
    </Card3D>
  );
} 