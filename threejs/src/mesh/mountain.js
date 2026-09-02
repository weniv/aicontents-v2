import * as THREE from 'three';

export default function printMountain() {

  // 텍스처 경로는 페이지 URL이 아닌 이 모듈 파일 기준으로 해석되도록 import.meta.url 사용
  // (이 모듈을 다른 페이지에서 import 해도 깨지지 않게)
  const loader = new THREE.TextureLoader();
  const top = loader.load(new URL('../textures/mountain/mountain_top.jpg', import.meta.url).href)
  const side = loader.load(new URL('../textures/mountain/mountain.jpg', import.meta.url).href)

  const geometry = new THREE.CylinderGeometry(1, 3, 3, 8);
  const material = new THREE.MeshStandardMaterial({ color: 0xffaaaa })

  const materials = [
    new THREE.MeshStandardMaterial({
      // color: 0xff0000,
      map: side
    }),
    new THREE.MeshStandardMaterial({
      // color: 0x00ff00,
      map: top
    }),
    new THREE.MeshStandardMaterial({ color: 0x609966 })
  ]
  const mountain = new THREE.Mesh(geometry, materials);
  mountain.castShadow = true
  mountain.receiveShadow = true

  return mountain;

}