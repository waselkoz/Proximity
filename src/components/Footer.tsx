import Link from 'next/link';
import Image from 'next/image';

export default function Footer({ lang = "en" }: { lang?: string }) {
  const t = (en: string, fr: string) => lang === "fr" ? fr : en;
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative z-50 bg-background border-t border-border pt-36 pb-8 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between flex-wrap gap-12 mb-16">
          <div className="max-w-[300px]">
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/logo.jpg" 
                alt="Proximity Logo" 
                width={200} 
                height={66} 
                className="object-contain w-auto h-[66px]"
              />
            </Link>
            <p className="text-text-muted text-[0.95rem] leading-relaxed">
              {t("Crafting premium digital experiences for forward-thinking brands.", "Création d'expériences numériques premium pour les marques visionnaires.")}
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-16">
            <div className="flex flex-col gap-4">
              <h4 className="text-base font-semibold mb-2 text-text">{t("Company", "Entreprise")}</h4>
              <Link href="#about" className="text-text-muted text-sm transition-colors duration-300 hover:text-primary">{t("About Us", "À Propos")}</Link>
              <Link href="#work" className="text-text-muted text-sm transition-colors duration-300 hover:text-primary">{t("Careers", "Carrières")}</Link>
              <Link href="#contact" className="text-text-muted text-sm transition-colors duration-300 hover:text-primary">{t("Contact", "Contact")}</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-base font-semibold mb-2 text-text">{t("Social", "Réseaux Sociaux")}</h4>
              <a href="#" className="text-text-muted text-sm transition-colors duration-300 hover:text-primary">Twitter / X</a>
              <a href="#" className="text-text-muted text-sm transition-colors duration-300 hover:text-primary">LinkedIn</a>
              <a href="#" className="text-text-muted text-sm transition-colors duration-300 hover:text-primary">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border flex-wrap gap-4 text-center md:text-left">
          <p className="text-text-muted text-[0.85rem]">
            &copy; {currentYear} Proximity Agency. {t("All rights reserved.", "Tous droits réservés.")}
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-text-muted text-[0.85rem] transition-colors duration-300 hover:text-text">{t("Privacy Policy", "Politique de Confidentialité")}</Link>
            <Link href="#" className="text-text-muted text-[0.85rem] transition-colors duration-300 hover:text-text">{t("Terms of Service", "Conditions d'Utilisation")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
