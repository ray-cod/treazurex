const Order = ({ children, onClick }) => {
  return (
    <article
      className={`p-6 transition-shadow duration-200 bg-gray-200 dark:bg-gray-900 rounded-xl shadow border-gray-800`}
      onClick={onClick}
    >
      {children}
    </article>
  );
};

export default Order;
