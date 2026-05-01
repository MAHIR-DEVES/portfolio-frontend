import AboutService from '@/components/common/home/AboutService';
import Banner from '@/components/common/home/Banner';
import ContactUs from '@/components/common/home/ContactUs';
import EducationalAndExperience from '@/components/common/home/EducationalAndExperience';
import ProjectSection from '@/components/common/home/ProjectSection';
import SkillSection from '@/components/common/home/SkillsSection';

export default function Page() {
  return (
    <>
      <Banner />
      <AboutService />
      <SkillSection />
      <EducationalAndExperience />
      <ProjectSection />
      <ContactUs />
    </>
  );
}
