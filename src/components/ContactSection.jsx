import { Mail, Phone, Linkedin, MessageCircle, Send, Github, MapPinHouse } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";
import { Trans, useTranslation } from "react-i18next"

export const ContactSection = () => {
    
    const { t } = useTranslation()
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {

        const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        });

        if (response.ok) {

            toast({
                title: t("contact.toasts.successTitle"),
                description: t("contact.toasts.successDesc"),
            });
            setFormData({ name: "", email: "", message: "" });

        } else {

            toast({
                title: t("contact.toasts.errorTitle"),
                description: t("contact.toasts.errorDesc"),
                variant: "destructive",
            });
        }

    } catch {

        toast({
            title: t("contact.toasts.networkTitle"),
            description: t("contact.toasts.networkDesc"),
            variant: "destructive",
        });

    } finally {

        setIsSubmitting(false);
    }

    };


    return (

    <section id="contact" className="py-24 px-4 relative bg-secondary/30">

        <div className="container mx-auto max-w-5xl">

            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                <Trans i18nKey="contact.title">
                    Get in <span className="text-primary"> Touch </span>
                </Trans>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                {t("contact.intro")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Left section */}
                <div className="space-y-8">

                    <h3 className="text-2xl font-semibold mb-6">
                        {t("contact.infoTitle")}
                    </h3>

                    <div className="space-y-6 justify-center">
                        <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-medium">Email</h4>
                            <a
                            href="mailto:felipexd1945@hotmail.com"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            >
                            felipexd1945@hotmail.com
                            </a>
                        </div>
                        </div>

                        <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-medium">Phone</h4>
                            <a
                            href="tel:+5511954043835"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            >
                            +55 (11) 9 5404-3835
                            </a>
                        </div>
                        </div>

                        <div className="flex items-center space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <MapPinHouse className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-medium">Location</h4>
                            <p className="text-muted-foreground">São Paulo, Brazil</p>
                        </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="font-medium mb-4">
                            {t("contact.social")}
                        </h4>
                        <div className="flex space-x-4 justify-center">
                        <a
                            href="https://www.linkedin.com/in/felipe-barros-a246a5164/"
                            target="_blank"
                        >
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

                {/* Right section - form */}
                <div className="bg-card p-8 rounded-lg shadow-xs">
                <h3 className="text-2xl font-semibold mb-6">
                    {t("contact.titleRightSection")}
                </h3>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                        {t("contact.fields.name")}
                    </label>
                    <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-muted-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                        placeholder="Jonh Doe"
                    />
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-2 font-medium">
                            {t("contact.fields.email")}
                        </label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-muted-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                            placeholder="jonh@company.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block mb-2 font-medium">
                            {t("contact.fields.message")}
                        </label>
                        <textarea
                            id="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                            placeholder= {t("contact.emailMessagePlaceHolder")}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
                    >
                        {isSubmitting ? t("contact.sending") : t("contact.send") } <Send size={16} />
                    </button>

                </form>

                </div>
            </div>

        </div>

    </section>

    );

};
