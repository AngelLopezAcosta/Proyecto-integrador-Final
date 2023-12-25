const useDeleteAddress = () => {
  const navigate = useNavigate();
  const del = async (url, data, a) => {
    try {
      const res = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: data.apiKey,
          "X-User-Email": data.email,
        },
      });
      const user = await res.json();
      localStorage.setItem("USER", JSON.stringify(user));
      navigate(a ? a : "/");
    } catch (error) {
      console.log("Request error:", error);
    }
  };

  return del;
};
export default useDeleteAddress;
