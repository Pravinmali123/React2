const Table = (Props)=> {

    var a = parseInt(Props.Computer)
    var b = parseInt(Props.Giography)
    var c = parseInt(Props.Philosophy)
    var d = parseInt(Props.SocialSceince)
    var Totalmark = a+b+c+d;
    
    var Percentage = (Totalmark / 400) * 100; 

 var Grade = "";
    var Pf = "";

    if (a < 33 || b < 33 || c < 33 || d < 33) {
        Grade = "Fail";
        Pf = "Fail";
    } else {
        if (Percentage >= 90) {
            Grade = "A+";
            Pf = "Pass";
        } else if (Percentage >= 80) {
            Grade = "A";
            Pf = "Pass";
        } else if (Percentage >= 70) {
            Grade = "B";
            Pf = "Pass";
        } else if (Percentage >= 60) {
            Grade = "C";
            Pf = "Pass";
        } else if (Percentage >= 50) {
            Grade = "D";
            Pf = "Pass";
        } else {
            Grade = "Fail";
            Pf = "Fail";
        }
    }

    return(
        <>
    
        <tr>
            <td align="center">{Props.Name}</td>
            <td align="center">{Props.Computer}</td>
            <td align="center">{Props.Giography}</td>
            <td align="center">{Props.Philosophy}</td>
            <td align="center">{Props.SocialSceince}</td>
            <td align="center">{Totalmark}</td>
            <td align="center">{Percentage}</td>
            <td align="center">{Grade}</td>
            <td align="center">{Pf}</td>
        </tr>
           
        </>
    )
}
export default Table;