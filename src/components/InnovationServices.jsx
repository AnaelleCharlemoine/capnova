import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function InnovationServices() {
  return (
    <div className="p-6 md:p-12 space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-blue-700">Anaëlle Charlemoine</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-700">
          Design & Innovation Strategist | Sprint Facilitator | Coach & Mentor
        </p>
        <p className="max-w-xl mx-auto text-md text-gray-600">
          Supporting startups, incubators, and corporate innovation teams with strategic facilitation,
          coaching, and hands-on mentoring to accelerate impact and innovation.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 space-y-3">
            <h2 className="text-xl font-semibold text-blue-800">Product & Service Design</h2>
            <p className="text-sm text-gray-600">
              UX Research, Customer Discovery, Journey Mapping, and Solution Prototyping
              for user-centered, value-driven offerings.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 space-y-3">
            <h2 className="text-xl font-semibold text-orange-700">Agile Process & Culture</h2>
            <p className="text-sm text-gray-600">
              Tailored agile frameworks and coaching to empower digital transformation
              and build a culture of sustainable innovation.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 space-y-3">
            <h2 className="text-xl font-semibold text-green-700">Design Sprints & Facilitation</h2>
            <p className="text-sm text-gray-600">
              Strategy workshops, co-creation bootcamps, and cross-functional facilitation
              to drive clarity and alignment.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-blue-600">Let’s Work Together</h2>
        <p className="text-md text-gray-600 max-w-xl mx-auto">
          Available for short-term facilitation, embedded roles, or long-term strategic support.
          Fluent in French, English, and German.
        </p>
        <div className="space-x-4">
          <Button asChild>
            <a href="mailto:anaelle.charlemoine@gmail.com">Contact Me</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#">Download Service Overview</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
