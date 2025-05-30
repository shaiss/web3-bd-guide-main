
import React from "react";
import { EvaluationTemplate } from "@/types/templates";
import { Card } from "@/components/ui/card";
import TemplateCard from "./TemplateCard";

interface TemplatesListProps {
  templates: EvaluationTemplate[];
  activeTemplateId: string;
  onSetActive: (templateId: string) => void;
  onDuplicate: (templateId: string) => void;
  onEdit: (templateId: string, isLocked: boolean) => void;
  onExport: (templateId: string) => void;
  onDelete: (templateId: string) => void;
}

const TemplatesList: React.FC<TemplatesListProps> = ({
  templates,
  activeTemplateId,
  onSetActive,
  onDuplicate,
  onEdit,
  onExport,
  onDelete
}) => {
  if (templates.length === 0) {
    return (
      <Card className="p-6 text-center">
        <h3 className="text-lg font-medium mb-2">No templates found</h3>
        <p className="text-muted-foreground mb-4">
          No matching templates found. Try adjusting your search or create a new template.
        </p>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {templates.map(template => (
        <TemplateCard
          key={template.id}
          template={template}
          isActive={template.id === activeTemplateId}
          onSetActive={onSetActive}
          onDuplicate={onDuplicate}
          onEdit={onEdit}
          onExport={onExport}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TemplatesList;
