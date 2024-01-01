import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Logout } from "../../../Services/AuthService";

const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isPending: isLoggingOut, mutate: logout } = useMutation({
    mutationFn: Logout,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/auth", {
        replace: true,
      });
    },
  });

  return {
    isLoggingOut,
    logout,
  };
};

export default useLogout;
