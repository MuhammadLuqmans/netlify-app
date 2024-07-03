import PropTypes from 'prop-types';
import DropdownWrapper from "./Dropdown.style.jsx";
import { useEffect, useState } from "react";
import EthIcon from "../../../assets/images/token/eth.png";
import { payWith } from "../../../contracts/config.js";
import Data from "../../../assets/data/networkInfo";

const Dropdown = ({
  userChainId,
  setIsActiveBuyOnEth,
  setIsActiveBuyOnBnb,
  switchNetwork,
  makeEmptyInputs,
  ethChainId,
  bnbChainId,
  variant,
}) => {
  const dropdownList = Data;

  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [titleText, setTitleText] = useState(payWith);
  const [selectedImg, setSelectedImg] = useState(EthIcon);

  useEffect(() => {
    dropdownList?.forEach((item, i) => {
      if (userChainId === item.chainId) {
        setTitleText(item.title);
        setSelectedImg(item.icon);
      }
    });
  }, [userChainId, dropdownList]);

  const dropdownHandle = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  const handleDropdownData = (item, event) => {
    event.preventDefault();
    setTitleText(item.title);
    setSelectedImg(item.icon);
    setIsDropdownActive(false);
    if (item.id === 1) {
      setIsActiveBuyOnBnb(false);
      setIsActiveBuyOnEth(true);
      switchNetwork?.(ethChainId);
      makeEmptyInputs();
    }
    if (item.id === 2) {
      setIsActiveBuyOnEth(false);
      setIsActiveBuyOnBnb(true);
      switchNetwork?.(bnbChainId);
      makeEmptyInputs();
    }
  };

  return (
    <DropdownWrapper variant={variant}>
      <button
        className={`dropdown-toggle ${isDropdownActive ? "active" : ""}`}
        onClick={dropdownHandle}
      >
        <img src={selectedImg} alt="icon" />
        <span>{titleText}</span>
      </button>
      {isDropdownActive && (
        <ul className="dropdown-list">
          {dropdownList?.map((item, i) => (
            <li key={i}>
              <a href="#" onClick={(event) => handleDropdownData(item, event)}>
                <img src={item.icon} alt="icon" />
                <span>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </DropdownWrapper>
  );
};

Dropdown.propTypes = {
  userChainId: PropTypes.number.isRequired,
  setIsActiveBuyOnEth: PropTypes.func.isRequired,
  setIsActiveBuyOnBnb: PropTypes.func.isRequired,
  switchNetwork: PropTypes.func,
  makeEmptyInputs: PropTypes.func.isRequired,
  ethChainId: PropTypes.number.isRequired,
  bnbChainId: PropTypes.number.isRequired,
  variant: PropTypes.string,
};

export default Dropdown;