import React from "react";
import { Link } from "react-router-dom";

export const LinksList = ({ links }) => {
  if (!links.length) {
    return <p className="center">Nie ma linków</p>;
  }

  // const linkToString =  JSON.stringify(link.to)

  // const linkFromString = JSON.stringify(link.fr)

  const Styles = {
    table: {
      tableLayout: "fixed",
      width: "100%",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },

    table_td: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },

    index: {
      width: "5%",
    },
    from: {
      width: "45%",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    mobile: {
      width: "90%",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    to: {
      width: "30%",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    link: {
      width: "20%",
    },
  };

  return (
    <div className="container">
      <table className="table section-heading list" style={Styles.table}>
        <thead className=" text-uppercase">
          <tr className="table-active">
            <th style={Styles.index}>#</th>
            <th className="hide" style={Styles.from}>
              Oryginalny link
            </th>
            <th className="hide" style={Styles.to}>
              Twój link
            </th>
            <th className="show-link" style={Styles.mobile}>
              Wybierz link aby zobaczyć szczegóły
            </th>
            <th className="hide" style={Styles.link}>
              Zobacz szczegóły
            </th>
          </tr>
        </thead>

        <tbody className="table-active">
          {links.map((link, index) => {
            return (
              <tr key={link._id}>
                <th>{index + 1}</th>
                <td className="hide">{link.from}</td>
                <td className="hide">{link.to}</td>
                <td className="show-link">
                  <Link
                    className="btn btn-link float-none"
                    to={`/detail/${link._id}`}
                  >
                    {link.from}
                  </Link>
                </td>
                <td className="hide">
                  <Link
                    className="btn btn-primary float-none"
                    to={`/detail/${link._id}`}
                  >
                    Otwórz
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
