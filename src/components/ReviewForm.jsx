import { useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import FormStyle from "../style/Form.module.css";

function ReviewForm({ movie_id }) {
    const { postReview } = useGlobalContext();
    const initialForm = {
        name: "",
        text: "",
        vote: ""
    };

    const [formData, setFormData] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const onHandelInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: name === "vote" ? parseInt(value) : value });
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        postReview({ ...formData }, movie_id);
        const newErrors = validateForm(formData);
        setErrors(newErrors);
        setFormData(initialForm);
        if (Object.keys(newErrors).length === 0) {

            console.log("Il form è stato inviato conb successo!");
        } else {
            console.log("L'invio del modulo non è riuscito a causa di errori di convalida");
        }
    };

    const validateForm = (formData) => {
        const errors = {};
        if (!formData.name.trim()) {
            errors.name = "Il campo `Nome` non può essere vuoto";
        } else if (formData.name.length < 2) {
            errors.name = "Il campp `Nome` deve contenere almeno 2 caratteri";
        }
        if (!formData.text.trim()) {
            errors.text = "Il campo `Inserisci commento` non può essere vuoto";
        }
        if (!formData.vote) {
            errors.vote = "Il campo `Voto` non può essere vuoto";
        } else if (formData.vote.length > 5) {
            errors.vote = "Non puoi inserire un numero superiore a 5"
        }
        return errors;
    };

    return (
        <>
            <form onSubmit={onHandleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" placeholder="Scrivi il tuo nome..." value={formData.name} onChange={onHandelInput} />
                    {errors.name && (
                        <span className={`error-message ${FormStyle.errorMessage}`}>
                            {errors.name}
                        </span>)}
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Scrivi il tuo commento...</label>
                    <textarea className="form-control" id="text" name="text" rows="3" value={formData.text} onChange={onHandelInput}></textarea>
                    {errors.text && (
                        <span className={`error-message ${FormStyle.errorMessage}`}>
                            {errors.text}
                        </span>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="vote" className="form-label">Inserisci un numero</label>
                    <input type="number" className="form-control w-25" id="vote" name="vote" min="0" max="5" step="1" value={formData.vote} onChange={onHandelInput} />
                    <div className="form-text">Inserisci un valore compreso tra 0 e 5.</div>
                    {errors.vote && (
                        <span className={`error-message ${FormStyle.errorMessage}`}>
                            {errors.vote}
                        </span>
                    )}
                </div>
                <button type="submit" className="btn btn-primary">Inserisci commento</button>
            </form>
        </>
    );
}

export default ReviewForm;