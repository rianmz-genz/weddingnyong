import Head from "next/head";
// componentsImport
import Container from "../components/home/layout/Container";
import Navbar from "../components/home/navbar/Navbar";
import ContainerContent from "../components/home/layout/ContainerContent";
import SideInformation from "../components/home/side/SideInformation";
// sectionsImport
import SectionHome from "../components/home/sections/SectionHome";
import SectionFeatures from "../components/home/sections/SectionFeatures";
import SectionDesign from "../components/home/sections/SectionDesign";
import SectionPrices from "../components/home/sections/SectionPrices";
import SectionTestimonials from "../components/home/sections/SectionTestimonials";
import Footer from "../components/home/footer/Footer";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Weddingnyong</title>
        <meta
          name="description"
          content={`Undangan Pernikahan Online Gratis Weddingnyong`}
        />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta
          property="og:title"
          content="Weddingnyong adalah website pembuatan undangan online gratis"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:description"
          content={`Undangan Pernikahan Online Gratis Weddingnyong`}
        />
        <link rel="shortcut icon" href="/favicon.svg" />
        {/* <meta name="google-site-verification" content="fMEql0p_U-xUj-bdslwAUxrJN7YVAak5yRExytckLLg" />
        <meta property="og:url" content="https://adrianajisepta.my.id" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/rianmz-genz/adrian-portfolio/main/public/images/screenshot.jpg"
        /> */}
      </Head>
      <Navbar />
      <ContainerContent>
        <SectionHome
          title="Undangan Pernikahan Online"
          description="Dikemas dalam bentuk website yang menarik serta dapat dibagikan kapanpun dan dimanapun."
          titleWhy="Mengapa harus WeddingNyong?"
          descriptionWhy="Kami hadir sebagai sebuah solusi untuk membantu calon mempelai yang berbahagia untuk membuat undangan pernikahan online dengan cepat dan mudah."
        />
        <SectionFeatures
          title="Fitur Terbaik"
          description="Fitur undangan pernikahan online terbaik abad ini yang siap untuk digunakan"
          titleCreateInvitations="Langkah Pembuatan Undangan"
          descriptionCreateInvitations="Hanya butuh beberapa langkah dan menit saja hingga undangan Kamu siap digunakan"
        />
        <SectionDesign
          title="Pilih Desain"
          description="Pilih tema undangan pernikahan yang menarik serta unik"
        />
        <SectionPrices
          title="Harga Undangan"
          description="Pilih paket undangan pernikahan online sesuai dengan kebutuhanmu, tenang harganya terjangkau banget 😉"
        />
        <SectionTestimonials
          title="Apa Yang Mereka Katakan?"
          description="Undangan Pernikahan Anda Akan Terlihat Baik Di Semua Perangkat Komputer, Tablet Maupun Telepon Pintar."
        />
      <Footer 
        copyright="Copyright 2022"
        description="Develop by Adrian Aji Septa & Didi Prasetyo"
      />
      </ContainerContent>
      <SideInformation />
    </Container>
  );
}
