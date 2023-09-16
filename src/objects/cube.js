import { BoxGeometry, MeshBasicMaterial, Mesh} from 'three'

const cubeGeometry = new BoxGeometry(1, 1, 1)
const cubeMaterial = new MeshBasicMaterial()

export const getCube = () => {
    return new Mesh(cubeGeometry, cubeMaterial);
}