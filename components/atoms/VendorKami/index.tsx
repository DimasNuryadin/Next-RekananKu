import LogoLoop from "@/components/reactbits/logoLoop";

const imageLogos = [
  { src: "/img/company/adhi.svg", alt: "Telkom Indonesia", href: "https://www.telkom.co.id" },
  { src: "/img/company/dahana.svg", alt: "Bank Mandiri", href: "https://www.bankmandiri.co.id" },
  { src: "/img/company/inalum.svg", alt: "Pertamina", href: "https://www.pertamina.com" },
  { src: "/img/company/inti.svg", alt: "Gojek", href: "https://www.gojek.com" },
  { src: "/img/company/pertamina.svg", alt: "Tokopedia", href: "https://www.tokopedia.com" },
  { src: "/img/company/perumnas.svg", alt: "PLN", href: "https://www.pln.co.id" },
  { src: "/img/company/waskita.svg", alt: "Bukalapak", href: "https://www.bukalapak.com" },
  { src: "/img/company/wika.svg", alt: "BRI", href: "https://www.bri.co.id" },
];

export default function VendorKami() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <LogoLoop
        logos={imageLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        ariaLabel="Technology partners"
      />
    </div>
  );
}