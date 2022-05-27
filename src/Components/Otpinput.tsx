import { useRef, useState } from "react";
import "./otp.css"
type OtpinputType = {
    totalInputs : number;
    onChange: (otp:string) => void;
}

export const Otpinput = ({totalInputs,onChange}:OtpinputType) => {
    const inputRef = useRef<HTMLInputElement[]>([])
    const [otp,setOtp] = useState<string>("")
  return (
    <div>
        {new Array(totalInputs).fill(1).map((el,index)=>(
            <input 
            onChange={(e) =>{
                setOtp(otp + e.target.value)
            }}
            onKeyUp={(e)=>{
                if(e.code==="Backspace"){
                    inputRef.current[index - 1].focus()
                    inputRef.current[index - 1].select()
                }else{
                    inputRef.current[index + 1].focus()
            }
            onChange(otp)
            }}
            ref={(element)=>{
                if(inputRef.current && element){
                    inputRef.current[index]=element;
                }
            }}
            className="otpinput" 
            type={"text"} 
            maxLength={1} 
            key={index}  />
        )

        )}
    </div>
  )
}
