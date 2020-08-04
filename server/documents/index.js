module.exports = ({ studentname, parentname, university, certificateId, physics, chemistry, mathematics, computerscience }) => {
    const today = new Date();
    return `
   <html lang="en">

   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>
   
   <body>
       <div style="width:900px; height:700px; padding:20px; text-align:center; border: 10px solid #787878">
           <div style="width:850px; height:650px; padding:20px; text-align:center; border: 5px solid #787878">
               <span style="font-size:50px; font-weight:bold">${university}</span><br /><br />
               <span style="font-size:20px; font-weight:bold">Mark sheet</span><br />
               <br />
               <span style="font-size:25px"><i>Congrats !!</i></span>
               <br />
               <span style="font-size:30px"><b>${studentname},son of ${parentname} has successfully cleared all the
                       subject</b></span><br /><br />
   
               <table align="center" border="12">
                   <TR>
                       <TD width="500">Marksheet number:</TD>
                       <TD>
                           <FONT face="arial" id="demoins"></FONT>${certificateId}
                       </TD>
                   </TR>
   
                   </TR>
                   <TR>
                       <TH colspan="8" width="240"> Subjects Marks </TH>
                   </TR>
                   <TR>
                       <TD width="500">Physics:</TD>
                       <TD>
                           <FONT face="arial" id="demooffice"></FONT>${physics}
                       </TD>
                   </TR>
                   <TR>
                       <TD width="500">Chemistry:</TD>
                       <TD>
                           <FONT face="arial" id="demoweb"></FONT>${chemistry}
                       </TD>
                   </TR>
                   <TD width="500">Mathematics:</TD>
                   <TD>
                       <FONT face="arial" id="demoit"></FONT>${mathematics}
                   </TD>
                   </TR>
                   <TR>
                       <TD width="500">Computer Science:</TD>
                       <TD>
                           <FONT face="arial" id="democ"></FONT>${computerscience}
                       </TD>
                   </TR>
                   <TR>
                       <TH colspan="500" width="500"> Marks Result </TH>
                   </TR>
                   <TR>
                       <TD width="500">TOTAL Marks:</TD>
                       <TD>
                           <FONT face="arial" id="demototal">${parseInt(physics) + parseInt(chemistry) +
        parseInt(mathematics) + parseInt(computerscience)}</FONT></TT>
                       </TD>
                   </TR>
                   <TR>
                       <TD width="500">Total Percentage:</TD>
                       <TD>
                           <FONT face="arial" id="demoper">${((parseInt(physics) + parseInt(chemistry) +
            parseInt(mathematics) + parseInt(computerscience)) / 400) * 100}%</FONT>
                       </TD>
                   </TR>
   
               </table>
               <span style="font-size:25px"><i>Date : </i>${`${today.getDate()}. ${today.getMonth() + 1}.
                   ${today.getFullYear()}.`}</span><br>
   
   
           </div>
       </div>
   
   </body>
   
   </html>

    `;
};











