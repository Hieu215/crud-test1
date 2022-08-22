import styles from './AboutUserStyles.module.scss';
import classNames from 'classnames/bind';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from 'reactstrap';
import PreviewImage from '../PreviewImage.js/PreviewImage';

const cl = classNames.bind(styles);

function About() {
  const formik = useFormik({
    initialValues: {
      avatar: '',
    },
    validationSchema: Yup.object({
      avatar: Yup.mixed()
        .required('Required!')
        .test('FILE_SIZE', 'Too big', (value) => value && value.size < 1024 * 1024)
        .test('FILE_TYPE', 'Invalid', (value) => value && ['image/png', 'image/jpeg'].includes(value.type)),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <form className={cl('row', 'g-3', 'validate')} onSubmit={formik.handleSubmit}>
        <div className={cl('input-validate')}>
          <div className="form-outline">
            <input
              type="file"
              className="form-control"
              name="avatar"
              onChange={(event) => formik.setFieldValue('avatar', event.target.files[0])}
            />
            {formik.errors.avatar && formik.touched.avatar && (
              <p className={cl('erros-toast')}>{formik.errors.avatar}</p>
            )}
          </div>
        </div>
        <div className={cl('all-button')}>
          <Button className={cl('add-btn')} type="submit">
            Add
          </Button>
        </div>
      </form>
      {formik.values.avatar && <PreviewImage file={formik.values.avatar} />}
    </div>
  );
}

export default About;
