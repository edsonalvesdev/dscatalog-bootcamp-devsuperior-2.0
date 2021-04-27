import BaseForm from '../../BaseForm/index.';
import './styles.scss';

const Form = () => {
    return (
        <BaseForm title="cadastrar produto">
            <div className="row">
                <div className="col-6">
                    <input type="text" className="form-control"/>
                </div>
            </div>
        </BaseForm>
    );
}
export default Form;