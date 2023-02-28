import React, { useEffect, useState } from 'react'
import { useImage } from 'react-image'
import SkeletonProductImage from '../../images/skeletoProduct.svg'

const CustomCacheImage = ({ src, alt, useSuspense }) => {
	const {
		src: imageUrl,
		isLoading,
		error,
	} = useImage({
		srcList: src,
		useSuspense: useSuspense,
		cache: true,
	})

	if (error) {
		return <div>{error.message}</div>
	}

	if (isLoading) {
		return <img src={SkeletonProductImage} alt={alt} />
	}

	return <img src={imageUrl} alt={alt} />
}

export default CustomCacheImage
