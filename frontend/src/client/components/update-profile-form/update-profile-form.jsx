import React, { useState } from "react";
import { Form, Input, Button, message as antdMessage, Skeleton } from "antd";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "../../../app/api/endpoints/auth";

export default function UpdateProfileForm() {
  const { data, profileLoading } = useGetProfileQuery();
  const [updateData, { isLoading: updateLoading }] = useUpdateProfileMutation();
  const [formValues, setFormValues] = useState({
    first_name: data?.first_name || "",
    last_name: data?.last_name || "",
    email: data?.email || "",
    phone_number: data?.phone_number || "",
  });

  const handleSubmit = async () => {
    try {
      const updatedFields = {};

      Object.keys(formValues).forEach((key) => {
        if (data[key] !== formValues[key]) {
          updatedFields[key] = formValues[key];
        }
      });

      if (Object.keys(updatedFields).length > 0) {
        const res = await updateData(updatedFields);
        const { error, data } = res;
        if (data) {
          antdMessage.success("Profile updated successfully");
        }
        if (error) {
          antdMessage.error("Failed to update profile");
        }
      } else {
        antdMessage.info("No changes were made");
      }
    } catch (error) {
      console.error("Error:", error);
      antdMessage.error("An error occurred while processing the request");
    }
  };

  if (profileLoading) {
    return (
      <div className="comp-container" style={{ padding: "25px" }}>
        <Skeleton.Input active style={{ width: "150px" }} />
        <br />
        <Skeleton.Input active style={{ width: "300px" }} />
        <br />
        <Skeleton.Input active style={{ width: "300px" }} />
        <br />
        <Skeleton.Input active style={{ width: "300px" }} />
        <br />
        <Skeleton.Input active style={{ width: "300px" }} />
      </div>
    );
  }

  return (
    <div className="comp-container" style={{ padding: "25px" }}>
      <h1>{data?.first_name}</h1>
      <Form
        onFinish={handleSubmit}
        layout="vertical"
        style={{
          marginTop: 10,
          width: "100%",
        }}
        initialValues={formValues}
        onValuesChange={(changedValues, allValues) => {
          setFormValues(allValues);
        }}
      >
        <Form.Item
          name="first_name"
          label="First Name"
          rules={[{ required: true, message: "Please enter your first name" }]}
        >
          <Input
            size="large"
            placeholder="First Name"
            value={formValues.first_name}
            onChange={(e) =>
              setFormValues({ ...formValues, first_name: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item
          name="last_name"
          label="Last Name"
          rules={[{ required: true, message: "Please enter your last name" }]}
        >
          <Input
            size="large"
            placeholder="Last Name"
            value={formValues.last_name}
            onChange={(e) =>
              setFormValues({ ...formValues, last_name: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email Address"
          rules={[{ required: true, message: "Please enter your email" }]}
        >
          <Input
            size="large"
            placeholder="Email Address"
            value={formValues.email}
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item
          name="phone_number"
          label="Phone Number"
          rules={[
            { required: true, message: "Please enter your phone number" },
          ]}
        >
          <Input
            size="large"
            placeholder="Phone Number"
            type="number"
            value={formValues.phone_number}
            onChange={(e) =>
              setFormValues({ ...formValues, phone_number: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{ width: "100%" }}
            loading={updateLoading}
          >
            Update
          </Button>
        </Form.Item>

        {/* Uncomment if needed */}
        {/* <Form.Item>
          <Link to="/change-password">Change Password</Link>
        </Form.Item> */}

        {/* Uncomment if needed */}
        {/* <Form.Item>
          <Link to="/login">Already have an account? Sign in</Link>
        </Form.Item> */}
      </Form>
    </div>
  );
}
