import { reactive, ref } from 'vue';
import { notification } from 'ant-design-vue';

const initialValues = {
  name: '',
  email: '',
  message: '',
};

export default function useForm(validate) {
  const formState = reactive({
    values: { ...initialValues },
    errors: { ...initialValues },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const values = formState.values;
    const errors = validate(values);
    formState.errors = errors;

    const url = ''; // Fill in your API URL here

    try {
      if (Object.values(errors).every((error) => error === '')) {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          notification.error({
            message: 'Error',
            description:
              'There was an error sending your message, please try again later.',
          });
        } else {
          formState.values = { ...initialValues };
          formState.errors = { ...initialValues };

          notification.success({
            message: 'Success',
            description: 'Your message has been sent!',
          });
        }
      }
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'Failed to submit form. Please try again later.',
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    formState.values[name] = value;
    formState.errors[name] = '';
  };

  return {
    handleChange,
    handleSubmit,
    values: formState.values,
    errors: formState.errors,
  };
}
