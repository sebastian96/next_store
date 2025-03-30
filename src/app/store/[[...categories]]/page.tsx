interface CategoryProps {
    params: {
        categories: string[],
    },
}

export default function Category (props: CategoryProps) {
    const {categories} = props.params
    return (
        <div>
            <h1>Dynamic categories - {categories}</h1>
        </div>
    )
}
