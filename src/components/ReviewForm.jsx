import { useState } from "react";
import { useParams } from "react-router";

function ReviewForm() {

    const { id } = useParams();

    const initialForm = {
        name: "",
        text: "",
        vote: "",
        movie_id: parseInt(id)
    };

    const [formData, setFormData] = useState(initialForm);

    const onHandelInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: name === "vote" ? parseInt(value) : value });
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();

        //axios 
        console.log(formData);
        setFormData(initialForm);
    };

    return (
        <>
            <form onSubmit={onHandleSubmit} >
                <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" placeholder="Scrivi il tuo nome..." value={formData.name} onChange={onHandelInput} />
                </div>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Scrivi il tuo commento...</label>
                    <textarea className="form-control" id="text" name="text" rows="3" value={formData.text} onChange={onHandelInput}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="vote" className="form-label">Inserisci un numero</label>
                    <input type="number" className="form-control w-25" id="vote" name="vote" min="0" max="5" step="1" value={formData.vote} onChange={onHandelInput} />
                    <div className="form-text">Inserisci un valore compreso tra 0 e 5.</div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}

export default ReviewForm;