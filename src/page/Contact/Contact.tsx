import { addDoc, collection } from "firebase/firestore";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { db } from "../../firebase";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ContactTypes } from "../../types";

const Contact = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactTypes>();

  const onSubmitHandler: SubmitHandler<ContactTypes> = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "contacts"), data);
      console.log("Document written with ID: ", docRef.id);
      Swal.fire({
        text: "Success to add contact",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "확인",
      }).then(() => {
        navigate("/");
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <StContainer>
      <StContactForm onSubmit={handleSubmit(onSubmitHandler)}>
        <StTitle>Contact</StTitle>
        <StLabel>Name</StLabel>
        <StInput
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        {errors.name && <p>Name is required</p>}
        <StLabel>Email</StLabel>
        <StInput
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && <p>Email is required</p>}
        <StLabel>Message</StLabel>
        <StMsgInput
          type="text"
          placeholder="Message"
          {...register("message", { required: true })}
        />
        {errors.message && <p>Message is required</p>}
        <StButton type="submit">Contact</StButton>
      </StContactForm>
    </StContainer>
  );
};

export default Contact;

const StContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #6e787d;
`;

const StContactForm = styled.form`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 2px solid white;
  border-radius: 1rem;
  position: relative;
`;

const StInput = styled.input`
  width: 90%;
  height: 40px;
  border: 1px solid white;
  font-size: 16px;
  margin-bottom: 20px;
`;

const StMsgInput = styled.input`
  width: 90%;
  height: 120px;
  border: 1px solid white;
  font-size: 16px;
`;

const StLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: white;
  width: 90%;
  margin-bottom: 5px;
`;

const StTitle = styled.h1`
  font-size: 40px;
  color: white;
  width: 100%;
  border-bottom: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  margin-top: 10px;
`;

const StButton = styled.button`
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 100px;
  height: 40px;
  background-color: white;
  border: 1px solid white;
  border-radius: 0.5rem;
  font-size: 16px;
`;
