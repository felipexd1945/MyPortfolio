import { Mail, Phone, MapIcon, Linkedin, MessageCircle, Send, Github } from "lucide-react";
import { cn } from '../lib/utils'
import { useToast } from '../hooks/use-toast';
import { useState } from "react";

export const ContactSection = () => {

    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {

        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {

            toast({
                title: "Message Sent!",
                description: "Thank you for your message. I'll get back to you soon."
            });
            
            setIsSubmitting(false);

        }, 1500);        

    }

    return (

        <section id="contact" className=" py-24 px-4 relative bg-secondary/30" >

            <div className="container mx-auto max-w-5xl">

                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get in <span className="text-primary"> Touch </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">

                    I'm always open to discussing new projects, creative ideas, 
                    or opportunities to be part of your visions. Feel free to reach out!

                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    <div className="space-y-8">
                    
                        <h3 className="text-2xl font-semibold mb-6"> Contact Information </h3>

                        <div className="space-y-6 justify-center">

                            <div className="flex items-center space-x-4">

                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div> 

                                <div>
                                    <h4 className="font-medium"> Email </h4>
                                    <a href="mailto:felipexd1945@hotmail.com" className="text-muted-foreground hover:text-primary transition-colors ">
                                        felipexd1945@hotmail.com
                                    </a>
                                </div>

                            </div>

                            <div className="flex items-center space-x-4">

                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div> 

                                <div>
                                    <h4 className="font-medium"> Phone </h4>
                                    <a href="tel:+5511954043835" className="text-muted-foreground hover:text-primary transition-colors ">
                                        +55 (11) 9 5404-3835
                                    </a>
                                </div>

                            </div>

                            <div className="flex items-center space-x-4">

                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapIcon className="h-6 w-6 text-primary" />
                                </div> 

                                <div>
                                    <h4 className="font-medium"> Location </h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors ">
                                        São Paulo, Brazil
                                    </a>
                                </div>

                            </div>

                        </div>

                        <div className="pt-8">

                            <h4 className="font-medium mb-4">Connect With Me</h4>

                            <div className="flex space-x-4 justify-center">

                                <a href="https://www.linkedin.com/in/felipe-barros-a246a5164/" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="mailto:felipexd1945@hotmail.com" target="_blank">
                                    <Mail />
                                </a>
                                <a href="https://wa.me/5511954043835" target="_blank">
                                    <MessageCircle />
                                </a>
                                <a href="https://github.com/felipexd1945" target="_blank">
                                    <Github />
                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>

                        <h3 className="text-2xl font-semibold mb-6"> Send a Message </h3>

                        <form className="space-y-6"> 

                            <div>
                                <label htmlFor="name" className="block mb-2 font-medium"> Your Name </label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    required
                                    className="w-full px-4 py-2 border border-muted-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 font-medium"> Your Email </label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    required
                                    className="w-full px-4 py-2 border border-muted-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                                    placeholder="Your Email"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2 font-medium"> Your Message </label>
                                <textarea 
                                    name="message"
                                    id="message" 
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Your Message"
                                />
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className={cn('cosmic-button w-full flex items-center justify-center gap-2')}>
                                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={16}/>
                            </button>

                        </form>
                    
                    </div>

                </div>
                
            </div>

        </section>
    )
}