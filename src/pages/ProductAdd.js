import { Form, Formik } from "formik";
import React from "react";
import { FormField } from "semantic-ui-react";
import * as Yup from "yup";
export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 10 };
  const schema = Yup.object({
    productName: Yup.string().required("Product name required."),
    unitPrice: Yup.string().required("Unit Price required"),
  });
  return (
    <div>
      <Formik initialValues={initialValues} validationSchema>
        <Form>
          <FormField>
            <label>Product Name</label>
            <input placeholder="Product Name" />
          </FormField>
          <Form.Field>
            <label>Unit Price</label>
            <input placeholder="Unit Price" />
          </Form.Field>
        </Form>
      </Formik>
    </div>
  );
}
