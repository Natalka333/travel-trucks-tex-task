import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <span className={css.loader}></span>
    </div>
  );
};

export default Loader;
