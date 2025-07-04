"use client";
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, User, GraduationCap, Truck, UserCheck } from "lucide-react";

import { AdminDashboard } from '@/components/dashboards/user/admin-dashboard';
import { UserDashboard } from '@/components/dashboards/user/user-dashboard';
import { InstructorDashboard } from '@/components/dashboards/user/instructor-dashboard';
import { SupplierDashboard } from '@/components/dashboards/user/supplier-dashboard';
import { DashboardView } from '@/types/dashboard';
import { DASHBOARD_ROLES, DASHBOARD_LABELS } from '@/components/dashboards/constants';

const MainDashboard: React.FC = () => {
  const [activeRole, setActiveRole] = useState<keyof typeof DASHBOARD_ROLES>("USER");

  const dashboardViews: DashboardView[] = [
    { id: DASHBOARD_ROLES.ADMIN, label: DASHBOARD_LABELS.admin, icon: Settings, component: AdminDashboard },
    { id: DASHBOARD_ROLES.USER, label: DASHBOARD_LABELS.user, icon: User, component: UserDashboard },
    { id: DASHBOARD_ROLES.INSTRUCTOR, label: DASHBOARD_LABELS.instructor, icon: GraduationCap, component: InstructorDashboard },
    { id: DASHBOARD_ROLES.SUPPLIER, label: DASHBOARD_LABELS.supplier, icon: Truck, component: SupplierDashboard }
  ];

  const ActiveComponent = dashboardViews.find(view => view.id === activeRole)?.component || UserDashboard;

  return (
    <div className="min-h-screen bg-background text-foreground py-8">
      <div className="container mx-auto px-4">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <UserCheck className="w-5 h-5" /> Select View
            </CardTitle>
            <CardDescription>Choose a dashboard by role</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            {dashboardViews.map(view => (
              <Button
                key={view.id}
                variant={activeRole === view.id ? 'default' : 'outline'}
                onClick={() => setActiveRole(view.id as keyof typeof DASHBOARD_ROLES)}
                className="flex items-center gap-2"
              >
                <view.icon className="w-4 h-4" />
                {view.label}
              </Button>
            ))}
          </CardContent>
        </Card>

        <div className="bg-card p-6 rounded-lg shadow-sm">
          <ActiveComponent />
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;