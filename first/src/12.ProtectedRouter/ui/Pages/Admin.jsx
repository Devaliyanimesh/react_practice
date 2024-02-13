import React, { useEffect, useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'
import Register from '../Components/Modal/Register'

export default function Admin() {
  const [data, setData] = useState([])
  // const [passIndex, setPassIndex] = useState([])
  const [regmodal, setRegmodal] = useState(false);
  const [fillterData, setFilterData] = useState([])
  const [userType, setUserType] = useState("All")
  const [search, setSearch] = useState("")
  console.log("🚀 ~ Admin ~ userType:", userType)

  const Regtoggle = () => setRegmodal(!regmodal);

  useEffect(() => {
    let RegData = JSON.parse(localStorage.getItem("RegisterData")) || []
    setFilterData(RegData);
    setData(RegData)
  }, [])

  useEffect(() => {
    const filter = () => {
      if (userType === "All") {
        setFilterData(data);
      } else {
        const filtered = data.filter(user => user.usertype === userType);
        setFilterData(filtered);
      }
    };

    filter()
  }, [userType, data])
  
  useEffect(()=>{
    const search = () => {
      let searchData = fillterData.filter((e)=>{
        e?.email.includes(search)
      })
      console.log("🚀 ~ searchData ~ searchData:", searchData)
      setFilterData(searchData)
    }
    search()

  },[search])



  // function showPassword(index) {
  //   setPassIndex([...passIndex, index])
  // }

  // function hidePassword(index) {
  //   const filteredData = passIndex?.filter((e, i) => i !== index);
  //   setPassIndex(filteredData);
  // }

  return (
    <>
      <Register modal={regmodal} toggle={Regtoggle} />

      <Button onClick={Regtoggle}>Add User</Button>
      <Form>
        <FormGroup>
          <Label for="usertype">
            Select type
          </Label>
          <Input
            id="usertype"
            name="select"
            value={userType}
            type="select"
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value={"All"}>
              All
            </option>
            <option value={"User"}>
              User
            </option>
            <option value={"Admin"}>
              Admin
            </option>
          </Input>
        </FormGroup>
        <FormGroup>
          <input type="text"
            onChange={(e) => setSearch(e.target.value)}
          />
        </FormGroup>
      </Form >
      <Table striped>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Email Id</th>
            <th>Password</th>
            {/* <th>Icon</th> */}
            <th>User Type</th>
          </tr>
        </thead>
        <tbody>
          {
            fillterData.map((e, i) => {
              return (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{e.email}</td>
                  <td>{e.password}</td>
                  {/* <td>{passIndex?.includes(i) ? e.password : '********'}</td>
                <td>
                  {passIndex.includes(i) ? (
                    <Eye
                      role="button"
                      onClick={() => hidePassword(i)}
                    />
                  ) : (
                    <EyeOff
                      role="button"
                      onClick={() => showPassword(i)}
                    />
                  )}
                </td> */}
                  <td>{e.usertype}</td>
                </tr>

              )
            })}
        </tbody>
      </Table></>
  )
}

/*
import React, { useEffect, useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'
import Register from '../Components/Modal/Register'

export default function Admin() {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [regmodal, setRegmodal] = useState(false);
  const [userTypeFilter, setUserTypeFilter] = useState("All");

  const Regtoggle = () => setRegmodal(!regmodal);

  useEffect(() => {
    const regData = JSON.parse(localStorage.getItem("RegisterData")) || [];
    setOriginalData(regData);
    setFilteredData(regData);
  }, []);

  useEffect(() => {
    filterData();
  }, [userTypeFilter]);

  const filterData = () => {
    if (userTypeFilter === "All") {
      setFilteredData(originalData);
    } else {
      const filtered = originalData.filter(user => user.usertype === userTypeFilter);
      setFilteredData(filtered);
    }
  };

  return (
    <>
      <Register modal={regmodal} toggle={Regtoggle} />

      <Button onClick={Regtoggle}>Add User</Button>
      <Form>
        <FormGroup>
          <Label for="usertype">Select type</Label>
          <Input
            id="usertype"
            name="select"
            value={userTypeFilter}
            type="select"
            onChange={(e) => setUserTypeFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </Input>
        </FormGroup>
        <Button onClick={filterData}>OK</Button>
      </Form>
      <Table striped>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Email Id</th>
            <th>Password</th>
            <th>User Type</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.usertype}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
*/