import React from 'react'
import { Box, Divider, Typography, Link } from '@mui/material'

import { Link as RRDLink } from 'react-router-dom'
import FooterLinkBlock from './FooterLinkBlock/FooterLinkBlock'

import cardsImg from '../../images/visaMasterCard.png'

const Footer = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				backgroundColor: 'rgb(24, 24, 24)',
				minHeight: '390px',
				color: '#fff',
			}}
		>
			<Box
				sx={{
					width: '100%',
					maxWidth: '1280px',
					display: 'flex',
					paddingTop: '30px',
				}}
			>
				<FooterLinkBlock
					title={'Dodo Pizza'}
					subtitle={'Dodo Pizza Story'}
					linkTo={'#hui'}
				/>
				<FooterLinkBlock
					title={'Partnership'}
					subtitle={'Franchising'}
					linkTo={'#hui'}
				/>
				<FooterLinkBlock
					title={'Interesting facts'}
					subtitle={'Why do we not use gloves at Dodo Pizza'}
					linkTo={'#hui'}
				/>

				<Box
					sx={{
						marginLeft: 'auto',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							gap: '12px',
							marginBottom: '12px',
						}}
					>
						<Box component={'a'} href={'#appStore'}>
							<svg
								width="120"
								height="40"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clipPath="url(#inline-svg-4-1)">
									<path
										d="M110.135 0H9.535c-.367 0-.73 0-1.095.002-.306.002-.61.008-.919.013C6.85.023 6.18.082 5.517.19a6.665 6.665 0 00-1.9.627A6.438 6.438 0 00.193 5.521a12.993 12.993 0 00-.179 2.002c-.01.307-.01.615-.015.921V31.56c.005.31.006.61.015.921.008.671.068 1.34.18 2.002.11.663.32 1.306.624 1.905a6.2 6.2 0 001.179 1.614 6.282 6.282 0 001.618 1.179 6.7 6.7 0 001.901.63c.663.11 1.333.168 2.004.177.31.007.613.011.919.011.366.002.728.002 1.095.002h100.6c.359 0 .724 0 1.084-.002.304 0 .617-.004.922-.01.67-.01 1.338-.068 2-.178a6.805 6.805 0 001.908-.63A6.293 6.293 0 00117.666 38a6.405 6.405 0 001.182-1.614c.302-.6.51-1.242.619-1.905.111-.661.173-1.33.185-2.002.004-.31.004-.61.004-.921.008-.364.008-.725.008-1.094V9.536c0-.366 0-.73-.008-1.092 0-.306 0-.614-.004-.92a13.57 13.57 0 00-.185-2.003 6.648 6.648 0 00-.619-1.903 6.469 6.469 0 00-2.799-2.8 6.77 6.77 0 00-1.908-.627c-.661-.11-1.33-.169-2-.176-.305-.005-.618-.011-.922-.013-.36-.002-.725-.002-1.084-.002z"
										fill="#A6A6A6"
									></path>
									<path
										d="M8.445 39.125c-.305 0-.602-.004-.904-.01a12.696 12.696 0 01-1.87-.164 5.884 5.884 0 01-1.656-.548 5.406 5.406 0 01-1.397-1.016 5.321 5.321 0 01-1.02-1.397 5.722 5.722 0 01-.544-1.657 12.413 12.413 0 01-.166-1.875c-.007-.21-.015-.913-.015-.913v-23.1s.009-.692.015-.895a12.37 12.37 0 01.165-1.872 5.755 5.755 0 01.544-1.662c.26-.518.603-.99 1.015-1.398A5.565 5.565 0 015.667 1.05c.62-.1 1.248-.155 1.876-.163l.902-.012h102.769l.913.013a12.37 12.37 0 011.858.162 5.933 5.933 0 011.671.548 5.589 5.589 0 012.415 2.42 5.74 5.74 0 01.535 1.649c.104.624.162 1.255.174 1.887.003.283.003.588.003.89.008.375.008.732.008 1.092v20.929c0 .363 0 .718-.008 1.075 0 .325 0 .623-.004.93-.011.62-.069 1.24-.171 1.853a5.716 5.716 0 01-.54 1.67 5.47 5.47 0 01-1.015 1.386 5.414 5.414 0 01-1.4 1.022 5.855 5.855 0 01-1.668.55c-.618.101-1.243.156-1.869.163-.293.007-.599.011-.897.011l-1.084.002-101.69-.002z"
										fill="#000"
									></path>
									<path
										d="M24.769 20.3a4.947 4.947 0 012.356-4.151 5.065 5.065 0 00-3.99-2.158c-1.68-.176-3.308 1.005-4.164 1.005-.872 0-2.19-.988-3.608-.958a5.315 5.315 0 00-4.473 2.727c-1.934 3.349-.492 8.27 1.361 10.977.927 1.325 2.01 2.805 3.428 2.753 1.387-.058 1.905-.885 3.58-.885 1.658 0 2.144.885 3.59.852 1.489-.025 2.426-1.332 3.32-2.67a10.963 10.963 0 001.52-3.092 4.782 4.782 0 01-2.92-4.4zm-2.732-8.09a4.873 4.873 0 001.115-3.49 4.958 4.958 0 00-3.208 1.66 4.638 4.638 0 00-1.143 3.361 4.099 4.099 0 003.236-1.53zm20.265 14.93H37.57l-1.137 3.356h-2.005l4.484-12.418h2.083l4.483 12.418h-2.039l-1.136-3.356zm-4.243-1.55h3.752l-1.85-5.446h-.051l-1.85 5.447zm17.101.38c0 2.813-1.506 4.62-3.779 4.62a3.07 3.07 0 01-2.848-1.583h-.043v4.484h-1.86V21.442h1.8v1.506h.033a3.212 3.212 0 012.883-1.6c2.298 0 3.813 1.816 3.813 4.622zm-1.91 0c0-1.833-.948-3.038-2.393-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.392-1.197 2.392-3.046zm11.874 0c0 2.813-1.505 4.62-3.778 4.62a3.069 3.069 0 01-2.848-1.583h-.043v4.484h-1.859V21.442h1.799v1.506h.034a3.21 3.21 0 012.883-1.6c2.298 0 3.813 1.816 3.813 4.622zm-1.91 0c0-1.833-.947-3.038-2.392-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.392-1.197 2.392-3.046zm8.496 1.066c.138 1.232 1.335 2.04 2.97 2.04 1.566 0 2.693-.808 2.693-1.919 0-.964-.68-1.54-2.29-1.936l-1.609-.388c-2.28-.55-3.339-1.617-3.339-3.348 0-2.142 1.867-3.614 4.519-3.614 2.624 0 4.423 1.472 4.483 3.614h-1.876c-.112-1.239-1.136-1.987-2.634-1.987-1.497 0-2.521.757-2.521 1.858 0 .878.654 1.395 2.255 1.79l1.368.336c2.548.603 3.606 1.626 3.606 3.443 0 2.323-1.85 3.778-4.793 3.778-2.754 0-4.614-1.42-4.734-3.667h1.902zM83.346 19.3v2.142h1.722v1.472h-1.722v4.991c0 .776.345 1.137 1.102 1.137.204-.004.408-.018.611-.043v1.463c-.34.064-.686.092-1.032.086-1.833 0-2.548-.689-2.548-2.444v-5.19h-1.316v-1.472h1.316V19.3h1.867zm2.719 6.67c0-2.849 1.678-4.639 4.294-4.639 2.625 0 4.295 1.79 4.295 4.639 0 2.856-1.661 4.638-4.295 4.638-2.633 0-4.294-1.782-4.294-4.638zm6.695 0c0-1.954-.895-3.108-2.401-3.108-1.506 0-2.4 1.162-2.4 3.108 0 1.962.894 3.106 2.4 3.106 1.506 0 2.401-1.144 2.401-3.106zm3.426-4.528h1.772v1.541h.043a2.16 2.16 0 012.178-1.635c.214-.001.428.022.637.069v1.738a2.591 2.591 0 00-.835-.112 1.872 1.872 0 00-1.937 2.083v5.37h-1.858v-9.054zm13.198 6.395c-.25 1.643-1.85 2.771-3.898 2.771-2.634 0-4.269-1.764-4.269-4.595 0-2.84 1.644-4.682 4.191-4.682 2.505 0 4.08 1.72 4.08 4.466v.637h-6.395v.112a2.353 2.353 0 00.639 1.832 2.364 2.364 0 001.797.732 2.045 2.045 0 002.091-1.273h1.764zm-6.282-2.702h4.526a2.167 2.167 0 00-.608-1.634 2.168 2.168 0 00-1.612-.664 2.293 2.293 0 00-2.306 2.298zM37.826 8.731a2.64 2.64 0 012.808 2.965c0 1.906-1.03 3.002-2.808 3.002h-2.155V8.73h2.155zm-1.228 5.123h1.125a1.875 1.875 0 001.967-2.146 1.882 1.882 0 00-1.967-2.134h-1.125v4.28zm5.082-1.41a2.133 2.133 0 114.248 0 2.134 2.134 0 11-4.247 0zm3.334 0c0-.976-.439-1.547-1.208-1.547-.773 0-1.207.571-1.207 1.547 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zm6.559 2.254h-.922l-.93-3.317h-.07l-.927 3.317h-.913l-1.242-4.503h.902l.806 3.436h.067l.925-3.436h.853l.926 3.436h.07l.803-3.436h.889l-1.237 4.503zm2.28-4.503h.856v.715h.066a1.348 1.348 0 011.344-.802 1.466 1.466 0 011.559 1.675v2.915h-.889v-2.692c0-.724-.314-1.084-.972-1.084a1.034 1.034 0 00-1.075 1.141v2.635h-.889v-4.503zm5.241-1.758h.888v6.26h-.888v-6.26zm2.124 4.007a2.134 2.134 0 114.247 0 2.132 2.132 0 01-3.704 1.64 2.134 2.134 0 01-.543-1.64zm3.333 0c0-.976-.439-1.546-1.208-1.546-.773 0-1.207.57-1.207 1.546 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zm1.849.98c0-.81.604-1.277 1.676-1.344l1.22-.07v-.389c0-.476-.315-.744-.922-.744-.497 0-.84.182-.939.5h-.86c.09-.773.818-1.27 1.84-1.27 1.128 0 1.765.563 1.765 1.514v3.077h-.855v-.633h-.07a1.515 1.515 0 01-1.353.707 1.36 1.36 0 01-1.501-1.348zm2.895-.384v-.377l-1.1.07c-.62.042-.9.253-.9.65 0 .405.351.64.834.64a1.064 1.064 0 001.166-.983zm2.053-.596c0-1.423.732-2.324 1.87-2.324a1.484 1.484 0 011.38.79h.067V8.437h.888v6.26h-.851v-.71h-.07a1.564 1.564 0 01-1.415.785c-1.145 0-1.869-.901-1.869-2.328zm.918 0c0 .955.45 1.53 1.203 1.53.75 0 1.212-.583 1.212-1.526 0-.938-.468-1.53-1.212-1.53-.748 0-1.203.58-1.203 1.526zm6.964 0a2.134 2.134 0 114.247 0 2.134 2.134 0 11-4.247 0zm3.333 0c0-.976-.439-1.547-1.208-1.547-.772 0-1.207.571-1.207 1.547 0 .984.435 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55zm2.107-2.249h.855v.715h.066a1.349 1.349 0 011.344-.802 1.466 1.466 0 011.559 1.675v2.915h-.889v-2.692c0-.724-.315-1.084-.972-1.084a1.034 1.034 0 00-1.075 1.141v2.635h-.889v-4.503zm8.845-1.121v1.141h.976v.749h-.976v2.315c0 .472.195.678.637.678.113 0 .226-.007.339-.02v.74c-.16.029-.322.044-.484.046-.988 0-1.382-.348-1.382-1.216v-2.543h-.714v-.749h.715V9.074h.89zm2.19-.637h.88v2.482h.07a1.385 1.385 0 011.374-.807 1.485 1.485 0 011.55 1.678v2.908h-.889V12.01c0-.72-.335-1.084-.963-1.084a1.05 1.05 0 00-1.134 1.142v2.63h-.888V8.437zm9.056 5.045a1.823 1.823 0 01-1.951 1.303 2.047 2.047 0 01-2.08-2.325 2.082 2.082 0 011.212-2.172 2.08 2.08 0 01.864-.18c1.253 0 2.009.856 2.009 2.27v.31h-3.18v.05a1.19 1.19 0 001.2 1.29 1.078 1.078 0 001.071-.546h.855zm-3.126-1.451h2.275a1.09 1.09 0 00-1.109-1.167 1.15 1.15 0 00-1.166 1.167z"
										fill="#fff"
									></path>
								</g>
								<defs>
									<clipPath id="inline-svg-4-1">
										<path fill="#fff" d="M0 0h119.664v40H0z"></path>
									</clipPath>
								</defs>
							</svg>
						</Box>
						<Box component={'a'} href={'#googlePlay'}>
							<svg
								width="135"
								height="40"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M130 0H5a5 5 0 00-5 5v30a5 5 0 005 5h125a5 5 0 005-5V5a5 5 0 00-5-5z"
									fill="#000"
								></path>
								<path
									d="M130 .8a4.2 4.2 0 014.2 4.2v30a4.198 4.198 0 01-4.2 4.2H5A4.2 4.2 0 01.8 35V5A4.2 4.2 0 015 .8h125zm0-.8H5a5 5 0 00-5 5v30a5 5 0 005 5h125a5.002 5.002 0 005-5V5a5.002 5.002 0 00-5-5z"
									fill="#A6A6A6"
								></path>
								<path
									d="M47.42 10.24a2.71 2.71 0 01-.75 2 2.909 2.909 0 01-2.2.89 3.15 3.15 0 01-2.21-5.37 3 3 0 012.21-.9 3.1 3.1 0 011.23.25c.362.146.684.376.94.67l-.53.53a2 2 0 00-1.64-.71 2.32 2.32 0 00-2.33 2.4 2.36 2.36 0 004 1.73 1.89 1.89 0 00.5-1.22h-2.17v-.72h2.91c.027.148.04.3.04.45zM52 7.74h-2.7v1.9h2.46v.72H49.3v1.9H52V13h-3.5V7H52v.74zM55.28 13h-.77V7.74h-1.68V7H57v.74h-1.72V13zm4.66 0V7h.77v6h-.77zm4.19 0h-.77V7.74h-1.68V7h4.12v.74h-1.67V13zm9.48-.78a3.12 3.12 0 01-4.4 0 3.24 3.24 0 010-4.45 3.1 3.1 0 014.4 0 3.23 3.23 0 010 4.45zm-3.83-.5a2.31 2.31 0 003.26 0 2.56 2.56 0 000-3.44 2.31 2.31 0 00-3.26 0 2.56 2.56 0 000 3.44zm5.8 1.28V7h.94l2.92 4.67V7h.77v6h-.8l-3.05-4.89V13h-.78z"
									fill="#fff"
									stroke="#fff"
									strokeWidth=".2"
									strokeMiterlimit="10"
								></path>
								<path
									d="M68.14 21.75A4.25 4.25 0 1072.41 26a4.19 4.19 0 00-4.27-4.25zm0 6.83a2.58 2.58 0 112.4-2.58 2.46 2.46 0 01-2.4 2.58zm-9.31-6.83A4.25 4.25 0 1063.09 26a4.192 4.192 0 00-4.27-4.25h.01zm0 6.83A2.58 2.58 0 1161.22 26a2.46 2.46 0 01-2.4 2.58h.01zm-11.09-5.52v1.8h4.32a3.77 3.77 0 01-1 2.27 4.422 4.422 0 01-3.33 1.32 4.8 4.8 0 010-9.6A4.6 4.6 0 0151 20.14l1.27-1.27A6.29 6.29 0 0047.74 17a6.61 6.61 0 100 13.21 6 6 0 004.61-1.85 6 6 0 001.56-4.22 5.875 5.875 0 00-.1-1.13l-6.07.05zm45.31 1.4a4 4 0 00-3.64-2.71 4.001 4.001 0 00-4 4.25 4.16 4.16 0 004.22 4.25 4.23 4.23 0 003.54-1.88l-1.45-1a2.43 2.43 0 01-2.09 1.18 2.16 2.16 0 01-2.06-1.29l5.69-2.35-.21-.45zm-5.8 1.42a2.33 2.33 0 012.22-2.48 1.65 1.65 0 011.58.9l-3.8 1.58zM82.63 30h1.87V17.5h-1.87V30zm-3.06-7.3h-.07a3 3 0 00-2.24-1 4.26 4.26 0 000 8.51 2.9 2.9 0 002.24-1h.06v.61c0 1.63-.87 2.5-2.27 2.5a2.35 2.35 0 01-2.14-1.51l-1.63.68A4.05 4.05 0 0077.29 34c2.19 0 4-1.29 4-4.43V22h-1.72v.7zm-2.14 5.88a2.59 2.59 0 010-5.16A2.402 2.402 0 0179.7 26a2.38 2.38 0 01-2.28 2.58h.01zm24.38-11.08h-4.47V30h1.87v-4.74h2.61a3.889 3.889 0 100-7.76h-.01zm0 6H99.2v-4.26h2.65a2.147 2.147 0 011.517 3.662 2.147 2.147 0 01-1.517.628l-.04-.03zm11.53-1.8a3.498 3.498 0 00-3.33 1.91l1.66.69a1.77 1.77 0 011.7-.92 1.804 1.804 0 011.792.931c.114.21.184.441.208.679v.13a4.13 4.13 0 00-1.95-.48c-1.79 0-3.6 1-3.6 2.81a2.904 2.904 0 00.969 2.03 2.892 2.892 0 002.131.72 2.634 2.634 0 002.4-1.2h.06v1h1.8v-4.81c0-2.19-1.66-3.46-3.79-3.46l-.05-.03zm-.23 6.85c-.61 0-1.46-.31-1.46-1.06 0-1 1.06-1.33 2-1.33a3.32 3.32 0 011.7.42 2.264 2.264 0 01-2.19 2l-.05-.03zM123.74 22l-2.14 5.42h-.06L119.32 22h-2l3.33 7.58-1.9 4.21h1.95L125.82 22h-2.08zm-16.81 8h1.87V17.5h-1.87V30z"
									fill="#fff"
								></path>
								<path
									d="M10.44 7.54a2 2 0 00-.46 1.4v22.12a2 2 0 00.46 1.4l.07.07L22.9 20.15v-.29L10.51 7.47l-.07.07z"
									fill="url(#inline-svg-5-1)"
								></path>
								<path
									d="M27 24.28l-4.1-4.13v-.29l4.1-4.14.09.05L32 18.56c1.4.79 1.4 2.09 0 2.89l-4.89 2.78-.11.05z"
									fill="url(#inline-svg-5-2)"
								></path>
								<path
									d="M27.12 24.22L22.9 20 10.44 32.46a1.63 1.63 0 002.08.06l14.61-8.3"
									fill="url(#inline-svg-5-3)"
								></path>
								<path
									d="M27.12 15.78l-14.61-8.3a1.63 1.63 0 00-2.08.06L22.9 20l4.22-4.22z"
									fill="url(#inline-svg-5-4)"
								></path>
								<path
									opacity=".2"
									d="M27 24.13l-14.49 8.25a1.67 1.67 0 01-2 0l-.07.07.07.07a1.66 1.66 0 002 0l14.61-8.3-.12-.09z"
									fill="#000"
								></path>
								<path
									opacity=".12"
									d="M10.44 32.32a2 2 0 01-.46-1.4v.15a2 2 0 00.46 1.4l.07-.07-.07-.08zM32 21.3l-5 2.83.09.09L32 21.44A1.75 1.75 0 0033 20a1.86 1.86 0 01-1 1.3z"
									fill="#000"
								></path>
								<path
									opacity=".25"
									d="M12.51 7.62L32 18.7a1.86 1.86 0 011 1.3 1.75 1.75 0 00-1-1.44L12.51 7.48c-1.4-.79-2.54-.13-2.54 1.47v.15c.03-1.61 1.15-2.27 2.54-1.48z"
									fill="#fff"
								></path>
								<defs>
									<linearGradient
										id="inline-svg-5-1"
										x1="21.8"
										y1="8.71"
										x2="5.02"
										y2="25.49"
										gradientUnits="userSpaceOnUse"
									>
										<stop stopColor="#00A0FF"></stop>
										<stop offset=".01" stopColor="#00A1FF"></stop>
										<stop offset=".26" stopColor="#00BEFF"></stop>
										<stop offset=".51" stopColor="#00D2FF"></stop>
										<stop offset=".76" stopColor="#00DFFF"></stop>
										<stop offset="1" stopColor="#00E3FF"></stop>
									</linearGradient>
									<linearGradient
										id="inline-svg-5-2"
										x1="33.83"
										y1="20"
										x2="9.64"
										y2="20"
										gradientUnits="userSpaceOnUse"
									>
										<stop stopColor="#FFE000"></stop>
										<stop offset=".41" stopColor="#FFBD00"></stop>
										<stop offset=".78" stopColor="orange"></stop>
										<stop offset="1" stopColor="#FF9C00"></stop>
									</linearGradient>
									<linearGradient
										id="inline-svg-5-3"
										x1="24.83"
										y1="22.3"
										x2="2.07"
										y2="45.05"
										gradientUnits="userSpaceOnUse"
									>
										<stop stopColor="#FF3A44"></stop>
										<stop offset="1" stopColor="#C31162"></stop>
									</linearGradient>
									<linearGradient
										id="inline-svg-5-4"
										x1="7.3"
										y1=".18"
										x2="17.46"
										y2="10.34"
										gradientUnits="userSpaceOnUse"
									>
										<stop stopColor="#32A071"></stop>
										<stop offset=".07" stopColor="#2DA771"></stop>
										<stop offset=".48" stopColor="#15CF74"></stop>
										<stop offset=".8" stopColor="#06E775"></stop>
										<stop offset="1" stopColor="#00F076"></stop>
									</linearGradient>
								</defs>
							</svg>
						</Box>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-end',
						}}
					>
						<Typography
							component={'a'}
							href={'tel:01273 567356'}
							sx={{
								fontSize: '25px',
								textDecoration: 'none',
								letterSpacing: '.4px',
								fontWeight: '500',
								color: '#fff',
								lineHeight: '1.2',
							}}
						>
							01273 567356
						</Typography>
						<Typography
							sx={{
								fontWeight: '500',
								opacity: '.5',
							}}
						>
							call
						</Typography>
					</Box>
				</Box>
			</Box>

			<Box
				sx={{
					width: '100%',
					maxWidth: '1280px',
					display: 'flex',
					justifyContent: 'flex-end',
					marginTop: '35px',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-end',
					}}
				>
					<Typography
						sx={{
							margin: '20px 0 10px',
							opacity: '.4',
						}}
					>
						We accept
					</Typography>

					<Box
						sx={{
							'& img': {
								width: 'auto',
								height: '47px',
							},
						}}
					>
						<img src={cardsImg} alt={'payment'} />
					</Box>
				</Box>
			</Box>

			<Divider
				color={'#fff'}
				sx={{
					width: '100%',
					maxWidth: '1280px',
					opacity: '.1',
					marginTop: '24px',
				}}
			/>
			<Box
				sx={{
					width: '100%',
					maxWidth: '1280px',
					marginTop: '26px',
					display: 'flex',
					alignItems: 'center',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						columnGap: '8px',
						marginRight: '15px',
					}}
				>
					<Box
						sx={{
							opacity: '.7',
							width: '110px',
							fill: '#fff',
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 269.2 64">
							<path d="M268.9,41.8l-9.4-20.4c-1.1-2.2-2.5-3.2-4.6-3.2h-0.4c-2.2,0-3.7,1-4.7,3.2l-9.4,20.4c-0.9,2-0.3,3.8,1.6,4.5c1.5,0.7,3.4,0.1,4.1-1.4c0,0,0,0,0,0l0.1-0.2l2.1-4.4c2.1,0.7,4.2,1,6.4,1c2.1,0,4.2-0.3,6.2-1l2,4.4c0.8,1.7,2.7,2.4,4.4,1.6C268.9,45.5,269.6,43.5,268.9,41.8L268.9,41.8z M254.7,35c-1.4,0-2.8-0.2-4.1-0.5l4-8.9l4,8.9C257.4,34.8,256.1,35,254.7,35z"></path>
							<path d="M234.3,40.1h-14.3l14.1-12.7c2-1.8,2.8-3.3,2.8-5.2v-0.3c0-2.4-1.4-3.7-4-3.7H215c-1.8-0.1-3.3,1.3-3.4,3c0,0.1,0,0.2,0,0.3c-0.1,1.7,1.2,3.1,2.9,3.2c0.2,0,0.3,0,0.5,0h13.2L214.6,37c-2.7,2.4-3.3,3.8-3.3,5.5v0.3c0,2.3,1.5,3.7,4,3.7h19.1c1.8,0.1,3.3-1.2,3.4-3c0-0.1,0-0.2,0-0.4c0.1-1.7-1.2-3.2-2.9-3.2C234.6,40,234.5,40,234.3,40.1"></path>
							<path d="M204.4,40.1h-14.3l14.2-12.7c2-1.8,2.8-3.3,2.8-5.2v-0.3c0-2.4-1.4-3.7-4-3.7h-18c-1.8-0.1-3.3,1.2-3.4,3c0,0.1,0,0.2,0,0.3c-0.1,1.7,1.2,3.1,2.9,3.2c0.2,0,0.3,0,0.5,0h13.2L184.7,37c-2.7,2.4-3.3,3.8-3.3,5.5v0.3c0,2.3,1.5,3.7,4,3.7h19.1c1.8,0.1,3.3-1.2,3.4-3c0-0.1,0-0.2,0-0.3c0.1-1.7-1.2-3.2-2.9-3.2C204.8,40.1,204.6,40.1,204.4,40.1"></path>
							<path d="M172.1,17.9c-1.8-0.1-3.4,1.3-3.5,3.1c0,0,0,0,0,0c0,0.1,0,0.2,0,0.3v22c0,2,1.6,3.6,3.6,3.6s3.6-1.6,3.6-3.6v-22c0.1-1.8-1.4-3.4-3.2-3.5L172.1,17.9"></path>
							<path d="M153.2,18.2h-11.5c-1.8-0.1-3.3,1.3-3.4,3.1c0,0.1,0,0.2,0,0.3v21.9c-0.1,1.8,1.3,3.3,3.1,3.4h0.3c1.8,0.1,3.3-1.3,3.4-3.1c0-0.1,0-0.2,0-0.3v-5.2h8c6.2,0,10.1-4.4,10.1-10.1S159.4,18.2,153.2,18.2z M153.2,31.8h-8v-7.2h8c1.8-0.1,3.4,1.4,3.5,3.2c0,0.1,0,0.3,0,0.4c0.2,1.8-1.2,3.4-3,3.6L153.2,31.8L153.2,31.8z"></path>
							<path d="M110.5,17.9c-7.9-0.2-14.4,6-14.6,13.9c0,0.2,0,0.4,0,0.6c-0.2,7.8,6,14.3,13.9,14.5h0.6c7.9,0.1,14.4-6.2,14.6-14.1c0-0.1,0-0.3,0-0.5c0.1-7.8-6.1-14.3-13.9-14.4C110.9,17.9,110.7,17.9,110.5,17.9z M110.5,40.4c-4.2,0.1-7.7-3.3-7.8-7.5c0-0.2,0-0.3,0-0.5c-0.1-4.3,3.3-7.8,7.6-7.9c4.2-0.1,7.7,3.2,7.9,7.4c0,0.2,0,0.3,0,0.5C118.3,37,115.2,40.4,110.5,40.4z"></path>
							<path d="M77.6,18.2h-9.3c-1.9,0-3.4,1.4-3.4,3.3c0,0.1,0,0.2,0,0.2v21.5c-0.1,1.8,1.3,3.3,3.1,3.4c0,0,0,0,0,0h9.6c8.3,0,14.7-5.8,14.7-14.3S85.9,18.2,77.6,18.2z M77.6,40h-5.9V24.8h5.9c4.7,0,7.9,2.8,7.9,7.5S82.3,40,77.6,40L77.6,40z"></path>
							<path d="M45.7,17.9c-7.9-0.2-14.4,6-14.6,13.9c0,0.2,0,0.4,0,0.6c-0.1,7.9,6.1,14.3,14,14.5c0,0,0,0,0,0h0.6c7.9,0.1,14.4-6.2,14.6-14.1c0-0.1,0-0.3,0-0.4c0.1-7.8-6.1-14.3-13.9-14.4C46.1,17.9,45.9,17.9,45.7,17.9z M45.7,40.4c-4.2,0.1-7.7-3.3-7.8-7.5c0-0.2,0-0.3,0-0.5c-0.1-4.3,3.3-7.8,7.6-7.9c4.2-0.1,7.8,3.2,7.9,7.4c0,0.2,0,0.3,0,0.5C53.4,37,50.4,40.4,45.7,40.4L45.7,40.4z"></path>
							<path d="M12.7,18.2H3.5c-1.9,0-3.4,1.4-3.4,3.3c0,0.1,0,0.2,0,0.2v21.5c-0.1,1.8,1.2,3.3,3,3.4c0,0,0.1,0,0.1,0h9.7c8.3,0,14.7-5.8,14.7-14.3S21.1,18.2,12.7,18.2z M12.7,40H6.9V24.8h5.9c4.7,0,7.9,2.8,7.9,7.5S17.5,40,12.7,40L12.7,40z"></path>
						</svg>
					</Box>
					<Typography
						sx={{
							opacity: '.7',
						}}
					>
						??&nbsp;2023
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						columnGap: '16px',
						paddingTop: '2.5px',
						'& p': {
							opacity: '.7',
							color: '#fff',
							fontSize: '15px',
						},

						'& p:hover': {
							opacity: '1',
						},
					}}
				>
					<Link component={RRDLink} to={'#rws'} underline={'none'}>
						<Typography>Terms of service</Typography>
					</Link>
					<Link component={RRDLink} to={'#rws'} underline={'none'}>
						<Typography>Allergens</Typography>
					</Link>
					<Link component={RRDLink} to={'#rws'} underline={'none'}>
						<Typography>Privacy policy</Typography>
					</Link>
					<Link component={RRDLink} to={'#rws'} underline={'none'}>
						<Typography>Credential on file agreement</Typography>
					</Link>
				</Box>
				<Box
					sx={{
						marginLeft: 'auto',

						display: 'flex',
						columnGap: '8px',
					}}
				>
					<Link
						href={'#lox'}
						sx={{
							backgroundColor: 'rgba(196, 196, 196, 0.2)',
							width: '32px',
							height: '32px',
							borderRadius: '4px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',

							'&:hover': {
								backgroundColor: 'rgba(196, 196, 196, 0.6)',
							},
						}}
					>
						<Box
							sx={{
								width: '24px',
								height: '25px',
								fill: '#fff',
								opacity: '.7',
							}}
						>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140">
								<path d="M29.56,24.55a5,5,0,0,0-5,5v80.88a5,5,0,0,0,5,5H73.1V80.26H61.25V66.53H73.1V56.41c0-11.74,7.17-18.13,17.65-18.13a97.08,97.08,0,0,1,10.58.54V51.09H94.07c-5.7,0-6.8,2.71-6.8,6.68v8.76h13.59L99.08,80.26H87.27v35.2h23.17a5,5,0,0,0,5-5V29.56a5,5,0,0,0-5-5H29.56Z"></path>
							</svg>
						</Box>
					</Link>
					<Link
						href={'#lox'}
						sx={{
							backgroundColor: 'rgba(196, 196, 196, 0.2)',
							width: '32px',
							height: '32px',
							borderRadius: '4px',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',

							'&:hover': {
								backgroundColor: 'rgba(196, 196, 196, 0.6)',
							},
						}}
					>
						<Box
							sx={{
								width: '24px',
								height: '25px',
								fill: '#fff',
								opacity: '.7',
							}}
						>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140">
								<path d="M49.91,22.28A27.69,27.69,0,0,0,22.28,50V90a27.68,27.68,0,0,0,27.62,27.69H90.09A27.68,27.68,0,0,0,117.72,90V50a27.69,27.69,0,0,0-27.62-27.7H49.91Zm0,8.2H90.09A19.34,19.34,0,0,1,109.54,50V90a19.33,19.33,0,0,1-19.44,19.49H49.91A19.33,19.33,0,0,1,30.47,90V50A19.33,19.33,0,0,1,49.91,30.49Zm45.71,8.2a5.74,5.74,0,1,0,5.72,5.74A5.73,5.73,0,0,0,95.61,38.69ZM70,45.43A24.57,24.57,0,1,0,94.52,70,24.6,24.6,0,0,0,70,45.43Zm0,8.2A16.37,16.37,0,1,1,53.67,70,16.29,16.29,0,0,1,70,53.63Z"></path>
							</svg>
						</Box>
					</Link>
				</Box>
			</Box>
		</Box>
	)
}

export default Footer
