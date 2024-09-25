import '../index.css'
import { calculateInvestmentResults, formatter } from '../util/investment.js'

export default function Results({ inputValues }) {
    const resultsData = calculateInvestmentResults(inputValues);
    const startingInvestment = resultsData[0].valueEndOfYear - resultsData[0].annualInvestment - resultsData[0].interest;//calculate the starting cash that was invested
    const resultsToDisplay = resultsData.map((yearObjectInfo, index) => { //go through each object in the array that represents a year
        const yearIntrest = yearObjectInfo.valueEndOfYear - startingInvestment - yearObjectInfo.annualInvestment * yearObjectInfo.year;
        const investmentCapital = yearObjectInfo.valueEndOfYear - yearIntrest;
        return (
            <>
                <tr key={index}>
                    <td>
                        {Object.values(yearObjectInfo)[0]}
                    </td>
                    <td>
                        {formatter.format(Object.values(yearObjectInfo)[1])}
                    </td>
                    <td>
                        {formatter.format(Object.values(yearObjectInfo)[2])}
                    </td>
                    <td>
                        {formatter.format(yearIntrest)}
                    </td>
                    <td>
                        {formatter.format(investmentCapital)}
                    </td>
                </tr>
            </>
        )
    })

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year </th>
                    <th>Investment Value </th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Investment Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsToDisplay}
            </tbody>
        </table>
    )
}