import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import React from 'react';

interface BreadCrumbBarProps {
  routes: { path: string; label: string }[];
}

const BreadcrumbBar: React.FC<BreadCrumbBarProps> = ({ routes }) => {
  return (
    <div className="pt-4">
      <div className="container">
        <Breadcrumb>
          <BreadcrumbList>
            {routes.map(({ path, label }, index, array) => (
              <React.Fragment key={path}>
                <BreadcrumbItem>
                  <BreadcrumbLink href={path}>{label}</BreadcrumbLink>
                </BreadcrumbItem>
                {index !== array.length - 1 && <BreadcrumbSeparator />}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default BreadcrumbBar;
