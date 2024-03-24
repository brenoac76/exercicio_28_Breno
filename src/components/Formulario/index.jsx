import { useState } from 'react';
import './IMCCalculator.css';

const IMCCalculator = () => {
    let [weight, setWeight] = useState('');
    let [height, setHeight] = useState('');
    let [imc, setIMC] = useState(null);
    let [classification, setClassification] = useState('');

    const calculateIMC = () => {
        if (!weight || !height) {
            alert('Por favor, insira o peso e a altura.');
            return;
        }

        
        const calculatedIMC = weight / (height * height);

        setIMC(calculatedIMC.toFixed(2));
        
        if (calculatedIMC < 18.5) {
            setClassification('Abaixo do Peso');
        } else if (calculatedIMC >= 18.5 && calculatedIMC < 25) {
            setClassification('Peso Normal');
        } else if (calculatedIMC >= 25 && calculatedIMC < 30) {
            setClassification('Sobrepeso');
        } else if (calculatedIMC >= 30 && calculatedIMC < 35) {
            setClassification('Obesidade Grau I');
        } else if (calculatedIMC >= 35 && calculatedIMC < 40) {
            setClassification('Obesidade Grau II');
        } else {
            setClassification('Obesidade Grau III');
        }


    };

    return (
        
        <div className='container'>
            <h1>Calculadora de IMC</h1>
            <form>
                <div className='form-field'>
                    <label>Peso (kg):</label>
                    <input
                        type="number"
                        id="weight"
                        className='input-field'
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </div>
                <div className='form-field'>
                    <label>Altura (metros):</label>
                    <input
                        type="number"
                        id="height"
                        className='input-field'
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />
                </div>
                <button type="button" onClick={calculateIMC} className='calculate-button'>
                    Calcular
                </button>
            </form>
            {imc && classification && (
                <div className='result'>
                    <h3>Seu IMC é: {imc}</h3>
                    <p style={{ color: (parseFloat(imc) < 18.5 || parseFloat(imc) >= 25) ? 'red' : 'green' }}>
                        Classificação: {classification}
                    </p>
                </div>
            )}
        </div>
    );
};

export default IMCCalculator;
