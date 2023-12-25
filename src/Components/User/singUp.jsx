import SingUpForm from './Forms/singUpForm';
const SingUp = () => {
  return (
    <main>
      <section className="Log">
        <article className="Video">
          <iframe
            width="100%"
            height="110%"
            src="https://www.youtube.com/watch?v=AKglaMoaylU"
            title="Shoe Store Promo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </article>

        <article className="Form">
          <SingUpForm />
        </article>
      </section>
    </main>
  );
};
export default SingUp;
