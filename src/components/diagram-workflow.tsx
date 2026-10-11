import { ArrowDown } from 'lucide-react';

interface WorkflowStep {
  label: string;
  description?: string;
}

interface WorkflowStage {
  label?: string;
  steps: WorkflowStep[];
}

interface DiagramWorkflowProps {
  stages: WorkflowStage[];
  title?: string;
  className?: string;
}

export function DiagramWorkflow({ stages, title, className = '' }: DiagramWorkflowProps) {
  return (
    <div className={`overflow-hidden rounded-lg border bg-card ${className}`}>
      {title && (
        <div className="border-b bg-muted/50 px-4 py-2">
          <h3 className="font-medium" id="workflow-diagram-title">
            {title}
          </h3>
        </div>
      )}
      <div className="p-4">
        <ol aria-labelledby={title ? 'workflow-diagram-title' : undefined} className="mx-auto max-w-3xl">
          {stages.map((stage, stageIndex) => (
            <li key={stage.label ?? stage.steps.map(({ label }) => label).join('-')}>
              {stage.label && (
                <h4 className="mb-2 text-center text-sm font-semibold text-muted-foreground">{stage.label}</h4>
              )}
              <ul className={`grid gap-3 ${stage.steps.length > 1 ? 'sm:grid-cols-2' : ''}`}>
                {stage.steps.map((step) => (
                  <li
                    key={step.label}
                    className="rounded-md border border-primary/25 bg-background px-4 py-3 text-center shadow-xs"
                  >
                    <p className="font-medium">{step.label}</p>
                    {step.description && <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>}
                  </li>
                ))}
              </ul>
              {stageIndex < stages.length - 1 && (
                <div className="flex justify-center py-2" aria-hidden="true">
                  <ArrowDown className="h-5 w-5 text-primary" />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
