import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Services
import AuthService from "../services/auth.service";
import ClassService from "../services/class.service";

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return windowWidth;
};

export const useGradeAndStudents = () => {
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
  const [grade, setGrade] = useState(null);
  const [students, setStudents] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsFetching(true);
    const grade_id = currentUser?.teacher_profile?.grade;
    if (grade_id === null) {
      navigate("/app/dashboard/profile", { replace: true });
    }

    ClassService.getClassData(grade_id)
      .then((response) => {
        setGrade((prevValue) => response.data);
        setStudents((prevValue) => response.data.students);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return { currentUser, grade, students, setStudents, isFetching };
};
