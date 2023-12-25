import LogInForm from "./Forms/logInForm";

const LogIn = () => {
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
          <LogInForm />
        </article>
      </section>
    </main>
  );
};
export default LogIn;
