import React, { useState, useEffect, memo } from "react";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
  padding: 18px 30px;

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  margin-bottom: 30px;
`;

const HomePage = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/React-Avancado/repos")
      .then((res) => setRows(res.data))
      .catch((e) => console.error("Ops... github API limit exceeded.", e));
  }, []);

  const headers = [
    {
      name: "Name",
      value: "name",
    },
    {
      name: "Description",
      value: "description",
    },
    {
      name: "Url",
      value: "html_url",
    },
  ];

  return (
    <Wrapper>
      <Title>React Avançado Repositories</Title>
      <Paragraph>
        A list of our repositories in React Avançado course.
      </Paragraph>

      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header.name}</th>
            ))}
          </tr>
        </thead>
        {rows.map((data, index) => (
          <tbody key={index}>
            <tr>
              <>
                <td >{data.name}</td>
                <td>{data.description}</td>
                <td>{data.html_url}</td>
              </>
            </tr>
          </tbody>
        ))}
      </table>
    </Wrapper>
  );
};

export default memo(HomePage);
