import { useForm, } from "react-hook-form"
import "./form.css"

function Form() {
    const {register, handleSubmit,formState: { errors }} = useForm()
    const onSubmit = data => console.log(data)
    console.log(errors)
    return (
        <form onSubmit={handleSubmit(onSubmit)}className="form">
            <label className="label">
                PRENOM
                <input name="Firstname" {...register("firstname",{type:"text",required: true} )}/>
                {errors.firstname && <p>le prenom est demandé, svp</p>}
            </label>
            <label className="label">
                NOM
                <input name="Lastname" {...register("Lastname",{required: true} )}/>
                {errors.Lastname && <p>le nom est demandé, svp</p>}
            </label>
            <label className="label">
                Mail
                <input name="Mail" {...register("Mail",{required: true})}/>
            </label>
            {errors.Mail && <p>l'email est demandé, svp</p>}
            <label className="label">
                Téléphone
                <input name="tel" {...register("tel",{required: true})}/>
                {errors.tel && <p>le numéro de Téléphone est demandé, svp</p>}
            </label>
                <input type="submit" />
        </form>    )}
    
    export default Form