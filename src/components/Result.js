import PropTypes from "prop-types";
import React from "react";

function Result({ fields, onClickLink, title, url }) {
  return (
    <li className="result">
      <div className="result__header">
        {!url && (
          <span
            className="result__title"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
        {url && (
          <a
            className="result__title"
            dangerouslySetInnerHTML={{ __html: title }}
            href={url}
            onClick={onClickLink}
            target="_blank"
          />
        )}
      </div>
      <div className="result__body">
        <ul className="result__details">
          {Object.keys(fields).map(key => (
            <li key={key}>
              <span className="result__key">{key}</span>{" "}
              <span
                className="result__value"
                dangerouslySetInnerHTML={{ __html: fields[key] }}
              />
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

Result.propTypes = {
  fields: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string
};

export default Result;