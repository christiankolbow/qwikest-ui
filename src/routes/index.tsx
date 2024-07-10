import { Badge, Button, Checkbox } from "@/components/ui/QwikestUi";
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div class="container space-x-4 py-8">
        <Button>Default button</Button>
        <Button variant="outline">Test</Button>
        <Badge>17</Badge>
        <Checkbox />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwikest UI",
  meta: [
    {
      name: "description",
      content: "Qwikest UI components",
    },
  ],
};
