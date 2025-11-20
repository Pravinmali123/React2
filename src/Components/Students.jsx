const Student = ()=> {
    return(
        <>
       <table border={1} align="center" cellSpacing={2} cellPadding={2}>
        <tr>
            <th>Name</th>
            <th>Computer</th>
            <th>Giography</th>
            <th>Philosophy</th>
            <th>Social Sceince</th>
            <th>Total mark</th>
            <th>Gread</th>
        </tr>
        <tr align="center">
            <td>Vaibhav</td>
            <td>36</td>
            <td>53</td>
            <td>68</td>
            <td>79</td>
            <td>298</td>
            <td>B+</td>
        </tr>
          <tr align="center">
            <td>Subhash</td>
            <td>33</td>
            <td>50</td>
            <td>62</td>
            <td>78</td>
            <td>368</td>
            <td>A+</td>
        </tr>
          <tr align="center">
            <td>Akhilesh</td>
            <td>34</td>
            <td>51</td>
            <td>32</td>
            <td>58</td>
            <td>169</td>
            <td>C</td>
        </tr>
          <tr align="center">
            <td>Ankur</td>
            <td>33</td>
            <td>40</td>
            <td>52</td>
            <td>68</td>
            <td>276</td>
            <td>B</td>
        </tr>
        <tr>
            <td colSpan={7} align="right"><h2>Shcool Overveiw Rusult: 89%</h2></td>
        </tr>
       </table>
        </>
    )
}
export default Student;