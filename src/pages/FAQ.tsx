import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does delivery take?",
      answer: "Same-day for local deliveries, 1-3 days for nationwide delivery, and 5-10 days for international shipping. Exact delivery times depend on the service selected and destination."
    },
    {
      question: "Do you offer Cash on Delivery (COD)?",
      answer: "Yes, COD is available across all major cities in the UAE. We securely collect payments and provide detailed transaction reports with fast settlement."
    },
    {
      question: "How can I track my parcel?",
      answer: "Enter your tracking number on our 'Track Your Parcel' page for real-time updates. We also send SMS and email notifications for major status changes."
    },
    {
      question: "Do you handle fragile items?",
      answer: "Yes, we ensure safe packaging and careful handling for fragile items. We offer special packaging services and insurance coverage for valuable or delicate packages."
    },
    {
      question: "What are your shipping rates?",
      answer: "Our rates depend on package weight, dimensions, delivery speed, and destination. We offer competitive pricing with no hidden fees. Contact us for a personalized quote."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we offer international shipping to over 200 countries through our global partners. We provide door-to-door service with customs clearance assistance."
    },
    {
      question: "What if my package is lost or damaged?",
      answer: "All packages come with basic insurance coverage. We investigate any issues immediately and work to resolve them quickly. Additional insurance is available for high-value items."
    },
    {
      question: "Do you offer business solutions?",
      answer: "Yes, we provide corporate logistics solutions including dedicated account managers, volume discounts, scheduled pickups, and custom delivery schedules."
    },
    {
      question: "What items cannot be shipped?",
      answer: "We cannot ship hazardous materials, flammable items, illegal substances, weapons, or perishable goods. Contact us for a complete list of prohibited items."
    },
    {
      question: "Do you provide insurance for shipments?",
      answer: "Yes, basic insurance is included with all shipments. For high-value items, we offer additional insurance coverage at competitive rates. The insurance covers loss, damage, or theft during transit. Claims are processed quickly with minimal documentation."
    },
    {
      question: "How do I schedule a pickup?",
      answer: "You can schedule a pickup through our website, mobile app, or by calling our 24/7 customer service. We offer flexible pickup times and can arrange same-day pickups for urgent shipments. For regular business customers, we can set up scheduled daily or weekly pickups."
    },
    {
      question: "What is your delivery coverage area?",
      answer: "We cover all major cities across the UAE including Dubai, Abu Dhabi, Sharjah, Ajman, and more. We also offer nationwide delivery throughout the Middle East region and international shipping to over 200 countries worldwide through our partner network."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-20 border-b">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-accent/20 text-foreground border-accent/30 font-semibold">
            FAQ
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our delivery services, shipping options, and support.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border rounded-lg px-6 bg-card"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Our support team is here to help you 24/7. Reach out through your preferred channel.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">
                  Speak directly with our team
                </p>
                <p className="font-semibold">+971 XX XXX XXXX</p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                <p className="text-muted-foreground mb-4">
                  Quick responses via chat
                </p>
                <Button variant="outline" className="w-full">Start Chat</Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">
                  Send us your questions
                </p>
                <Link to="/contact">
                  <Button variant="outline" className="w-full">Contact Form</Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
