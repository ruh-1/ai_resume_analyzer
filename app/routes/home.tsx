
import Navbar from "~/components/Navbar";
import {resumes} from "~/constants";
import ResumeCard from "~/components/ResumeCard";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "RESUMIND" },
    { name: "description", content: "smart feedback for your dream job" },
  ];
}

export default function Home() {
  return (
      <main className="bg-[url('/images/bg-main.svg')] bg-cover bg-center min-h-screen">
        <Navbar/>

        <section className="mainsection">
            <div className="page-heading py-16">
            <h1>TRACK YOUR APPLICATIONS AND RESUME RATINGS</h1>
            <h2>REVIEW YOUR SUBMISSIONS AND AI POWERED FEEDBACK</h2>
            </div>

            {resumes.length>0 && (
              <div className="resumes-section">
                  {resumes.map((resume) => (
                      <ResumeCard key={resume.id} resume ={resume}/>

                  ))}
              </div>
          )}
        </section>
      </main>


  );
}

