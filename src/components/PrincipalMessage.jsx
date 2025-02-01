import headSir from '../images/headsir.png';

export default function PrincipalMessage() {
  return (
    <section className="bg-gray-100 py-10 w-full">
      <div className="max-w-screen-xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-xl md:text-2xl font-bold text-purple-700 border-b-4 border-yellow-500 pb-2 mb-6">
          MESSAGE FROM PRINCIPAL
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={headSir}
            alt="Principal"
            className="w-64 h-64 object-cover rounded-lg shadow-md border"
          />
          <div>
            <h3 className="text-lg md:text-xl font-bold text-gray-800">
              CHETMAN PRASAD DAS
            </h3>
            <div className="w-16 border-b-2 border-yellow-500 my-2"></div>
            <p className="text-gray-700 text-justify">
              Dear Guardians and Students, It’s our great pleasure and honor to
              welcome you to our school! At{' '}
              <strong> Shree Nepal Rastriya Secondary School, Parsagadhi Muncipality-9, Baderwa, Parsa,</strong> we are
              dedicated to creating an environment that nurtures curiosity,
              fosters creativity, and inspires lifelong learning. Our mission is
              to provide a holistic education that empowers every student to
              realize their full potential, both academically and personally.
              With a strong focus on excellence, character development, and
              community, we aim to shape responsible, compassionate, and
              innovative individuals ready to make a positive impact on the
              world. Together, let's build a brighter future through the power
              of education and collaboration.
              <br />
              <br />
              Best wishes!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
