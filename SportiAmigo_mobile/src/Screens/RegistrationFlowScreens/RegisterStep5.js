import React, { useEffect, useState } from "react";
import {
  Layout,
  Text,
  Input,
  Button,
  useTheme,
  CheckBox,
} from "@ui-kitten/components";
import DottedProgress from "../../Components/DottedProgress ";
import { theme } from "../../themes";
import axiosInstance from "../../axiosConfig";

const RegisterStep5 = ({ navigation }) => {
  const theme = useTheme();
  const [isFacilityAdmin, setIsFacilityAdmin] = useState(false);
  const [role, setRole] = useState("");
  const [responsibilities, setResponsibilities] = useState("");

  const handleFinishRegistration = async () => {
    if (isFacilityAdmin) {
      if (!role || !responsibilities) {
        alert("Please fill in all fields.");
        return;
      }
  
      try {
        const response = await axiosInstance.post("/api/userauth/facility-admin/", {
          role,
          responsibilities,
        });
  
        if (response.status === 201) {
          console.log(response.data);
          // Registration was successful
          navigation.popToTop();
        } else {
          // Handle other error cases
          console.error(response.data);
          alert("An error occurred while authenticating. Please try again later.");
        }
      } catch (error) {
        // Handle network or other errors
        console.error(error);
        alert("An error occurred while authenticating. Please try again later.");
      }
    } else {
      console.log("Not a facility admin");
    //   console.log(navigation);

   
    navigation.reset({
        index: 0,
        routes: [{ name: 'SignIn' }],
      });
    //   console.log(navigation.getState())
    //   navigation.popToTop();
    }
  };
  

  return (
    <Layout style={styles.container}>
      <Text category="h4" style={styles.title}>
        Registration - Step 5
      </Text>

      <DottedProgress totalSteps={5} currentStep={5} />
      <Text style={styles.label}>Are you a facility administrator?</Text>
      <CheckBox
        checked={isFacilityAdmin}
        onChange={setIsFacilityAdmin}
        style={{ marginBottom: 16 }}
      >
        I am a facility adminsitrator
      </CheckBox>

      {isFacilityAdmin && (
        <>
          <Text style={styles.label}>Role:</Text>
          <Input
            style={styles.input}
            value={role}
            onChangeText={setRole}
            placeholder="Enter your role"
          />

          <Text style={styles.label}>Responsibilities:</Text>
          <Input
            style={styles.input}
            value={responsibilities}
            onChangeText={setResponsibilities}
            placeholder="Enter your responsibilities"
          />
        </>
      )}

      <Button
        style={styles.button}
        onPress={() => handleFinishRegistration()}
      >
        Complete Registration
      </Button>
    </Layout>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
    width: "100%",
  },
};

export default RegisterStep5;
