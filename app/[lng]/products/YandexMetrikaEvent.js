// components/YandexMetrikaEvent.js
"use client";

import { useEffect } from 'react';

const YandexMetrikaEvent = ({ productId, productName }) => {
  useEffect(() => {
    if (typeof ym === 'function') {
      ym(98441120, 'reachGoal', 'view_product', {
        product_id: productId,
        product_name: productName,
      });
    } else {
      console.error('Яндекс.Метрика не загружена');
    }
  }, [productId, productName]);

  return null;
};

export default YandexMetrikaEvent;
