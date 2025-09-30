import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Truck, 
  Package, 
  Globe, 
  Building2, 
  Clock, 
  Shield, 
  Sparkles, 
  Users,
  CheckCircle2,
  Zap,
  Heart,
  DollarSign,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: Clock,
      title: "Same-Day Delivery",
      description: "Fast, local deliveries made within hours – perfect for urgent packages."
    },
    {
      icon: Globe,
      title: "International Shipping",
      description: "Connecting your parcels globally with trusted international partners."
    },
    {
      icon: DollarSign,
      title: "Cash on Delivery (COD) Solutions",
      description: "Ideal for e-commerce businesses – collect payments at the customer's doorstep."
    },
    {
      icon: Building2,
      title: "Corporate Logistics",
      description: "Customized delivery solutions for businesses, documents, and bulk shipments."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Parcels Monthly" },
    { number: "95%", label: "On-Time Rate" },
    { number: "24/7", label: "Live Support" },
    { number: "200+", label: "Business Partners" }
  ];

  const features = [
    {
      icon: Clock,
      title: "On-Time Delivery Guarantee",
      description: "We guarantee on-time delivery for all our services. Our commitment to punctuality ensures your packages arrive exactly when promised."
    },
    {
      icon: Globe,
      title: "Nationwide & International Coverage",
      description: "From local deliveries to international shipping, we provide comprehensive coverage across the Middle East and beyond."
    },
    {
      icon: DollarSign,
      title: "Affordable & Transparent Pricing",
      description: "No hidden fees, no surprises. Our transparent pricing structure ensures you know exactly what you're paying for quality service."
    },
    {
      icon: MapPin,
      title: "Real-Time Tracking",
      description: "Track your shipment in real-time from pickup to delivery. Stay informed every step of the way with our advanced tracking system."
    }
  ];

  const testimonials = [
    {
      name: "Ahmed Al-Mansoori",
      role: "E-Commerce Owner",
      content: "When I started my online store, I was worried about delivery reliability. Shat Al Arab changed everything. My customers now trust me because they know their orders will arrive on time. Last month, a customer wrote me a 5-star review just because the delivery was so smooth!"
    },
    {
      name: "Sarah Johnson",
      role: "Operations Manager",
      content: "I remember the panic when we had a last-minute shipment for a major client. It was 3 PM and we needed it delivered by 6 PM. The team at Shat Al Arab didn't just say yes – they made it happen with a smile. That's the kind of partnership that builds businesses."
    },
    {
      name: "Mohammed Ali",
      role: "Retail Business",
      content: "My customers love the same-day delivery option. Just yesterday, a mother called me crying with gratitude because we delivered her daughter's birthday cake on time. These moments remind me why I chose Shat Al Arab – they care about people, not just packages."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - New Layout */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-warm to-background cursor-organic">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20 font-semibold hand-drawn animate-hand-drawn-wiggle">
                  🚚 Trusted Delivery Partner
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="text-foreground animate-breathing">Fast, Reliable & Secure</span>
                  <span className="block text-primary animate-natural-sway">Deliveries Across the Middle East</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed imperfect-text text-shadow-organic">
                  Shat Al Arab Express Delivery – Connecting Businesses & Customers with Speed and Care. Your trusted logistics partner in the UAE.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" variant="accent" className="btn-human w-full sm:w-auto text-base px-8 py-6">
                    Book Your Delivery Now
                  </Button>
                </Link>
                <Link to="/track">
                  <Button size="lg" variant="outline" className="btn-human w-full sm:w-auto text-base px-8 py-6">
                    Track Package
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center hand-drawn animate-gentle-bounce">
                  <div className="text-2xl font-bold text-primary animate-warm-pulse">10K+</div>
                  <div className="text-sm text-muted-foreground">Monthly Deliveries</div>
                </div>
                <div className="text-center hand-drawn animate-gentle-bounce" style={{animationDelay: '0.3s'}}>
                  <div className="text-2xl font-bold text-primary animate-warm-pulse" style={{animationDelay: '0.3s'}}>95%</div>
                  <div className="text-sm text-muted-foreground">On-Time Rate</div>
                </div>
                <div className="text-center hand-drawn animate-gentle-bounce" style={{animationDelay: '0.6s'}}>
                  <div className="text-2xl font-bold text-primary animate-warm-pulse" style={{animationDelay: '0.6s'}}>24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>

            {/* Right Content - Visual Element */}
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 border border-primary/20 warm-glow animate-organic-float shadow-organic-lg imperfect-rect">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center animate-gentle-bounce imperfect-circle">
                        <Package className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Same-Day Delivery</h3>
                        <p className="text-sm text-muted-foreground">Fast & Reliable</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center animate-gentle-bounce imperfect-circle" style={{animationDelay: '0.5s'}}>
                        <Globe className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">International Shipping</h3>
                        <p className="text-sm text-muted-foreground">Worldwide Coverage</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center animate-gentle-bounce imperfect-circle" style={{animationDelay: '1s'}}>
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Secure & Insured</h3>
                        <p className="text-sm text-muted-foreground">Peace of Mind</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - New Layout */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 hand-drawn animate-hand-drawn-wiggle">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-breathing">
              Comprehensive Delivery Solutions for Every Need
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto imperfect-text text-shadow-organic">
              From same-day delivery to international shipping, we provide comprehensive logistics services tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-human p-6 text-center group hover:bg-primary/5 transition-colors hand-drawn">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors mx-auto mb-4 animate-gentle-bounce imperfect-circle shadow-organic" style={{animationDelay: `${index * 0.2}s`}}>
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 imperfect-text">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed imperfect-text text-shadow-organic">{service.description}</p>
                <Link to="/services">
                  <Button variant="link" className="p-0 font-semibold text-primary hover:text-accent transition-colors">
                    Learn More →
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - New Layout */}
      <section className="py-20 bg-warm">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Why Choose Us</Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Why Choose Shat Al Arab Express Delivery
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We deliver trust, speed, and reliability with every package. Our commitment to excellence makes us the preferred choice for businesses and individuals across the Middle East.
                </p>
              </div>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 border border-primary/10 warm-glow animate-organic-float">
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-primary mb-2 animate-warm-pulse">10K+</div>
                    <div className="text-lg text-muted-foreground">Monthly Deliveries</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-1 animate-gentle-bounce" style={{animationDelay: '0.3s'}}>95%</div>
                      <div className="text-sm text-muted-foreground">On-Time Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-1 animate-gentle-bounce" style={{animationDelay: '0.6s'}}>200+</div>
                      <div className="text-sm text-muted-foreground">Business Partners</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2 animate-warm-pulse" style={{animationDelay: '0.9s'}}>24/7</div>
                    <div className="text-lg text-muted-foreground">Customer Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - New Layout */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 hand-drawn animate-hand-drawn-wiggle">Testimonials</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-breathing">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real feedback from businesses and individuals who trust us daily.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-human p-8 hand-drawn animate-organic-float shadow-organic-lg" style={{animationDelay: `${index * 0.3}s`}}>
                <div className="flex items-center gap-1 mb-4 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle2 key={i} className="h-5 w-5 fill-current animate-gentle-bounce" style={{animationDelay: `${i * 0.1}s`}} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-primary/20 pt-4">
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section - New Layout */}
      <section className="py-20 bg-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Success Stories</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Moments That Made Us Smile
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every delivery has a story. Here are some that touched our hearts and reminded us why we do what we do.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="card-human p-8 hand-drawn animate-organic-float">
              <div className="flex items-center gap-1 mb-4 text-accent">
                {[...Array(5)].map((_, i) => (
                  <CheckCircle2 key={i} className="h-5 w-5 fill-current animate-gentle-bounce" style={{animationDelay: `${i * 0.1}s`}} />
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">The Wedding Ring Rescue</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                "Last month, a groom called us in tears. His wedding ring was stuck in customs and his wedding was in 6 hours. Our team worked miracles – we got it cleared, delivered it to the venue, and even stayed to see the happy couple exchange vows. That's not just delivery – that's making dreams come true."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center animate-gentle-bounce">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Ahmed</div>
                  <div className="text-sm text-muted-foreground">Delivery Team Lead</div>
                </div>
              </div>
            </Card>

            <Card className="card-human p-8 hand-drawn animate-organic-float" style={{animationDelay: '0.5s'}}>
              <div className="flex items-center gap-1 mb-4 text-accent">
                {[...Array(5)].map((_, i) => (
                  <CheckCircle2 key={i} className="h-5 w-5 fill-current animate-gentle-bounce" style={{animationDelay: `${i * 0.1}s`}} />
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">The Birthday Surprise</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                "A mother in Abu Dhabi ordered a birthday cake for her daughter studying in Dubai. When we delivered it, the daughter was so surprised she started crying. She hadn't seen her family in months. We didn't just deliver a cake – we delivered love, connection, and the feeling of being remembered."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center animate-gentle-bounce">
                  <Heart className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Fatima</div>
                  <div className="text-sm text-muted-foreground">Customer Service</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA - New Layout */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Start Shipping Today with Shat Al Arab Express Delivery
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join thousands of satisfied customers who trust us with their most important deliveries. Experience the difference of working with a reliable logistics partner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" variant="accent" className="btn-human w-full sm:w-auto text-base px-8 py-6">
                    Start Shipping Today
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="btn-human w-full sm:w-auto text-base px-8 py-6">
                    Talk to an Expert
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Contact Info */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/10 warm-glow animate-organic-float">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Get Started Today</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center animate-gentle-bounce">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <div className="text-sm text-muted-foreground">+971 XX XXX XXXX</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center animate-gentle-bounce" style={{animationDelay: '0.3s'}}>
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <div className="text-sm text-muted-foreground">info@shatalarab.ae</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center animate-gentle-bounce" style={{animationDelay: '0.6s'}}>
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">24/7 Support</div>
                    <div className="text-sm text-muted-foreground">Always here for you</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
